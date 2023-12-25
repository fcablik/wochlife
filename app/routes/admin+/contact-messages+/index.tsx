import { json, redirect, type DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { format } from 'date-fns'
import { z } from 'zod'
import { ContactMessageAccordion } from '#app/components/contact-messages-accordion.tsx'
import { FiltersWithSearchAndCalendar } from '#app/components/contact-messages-filters.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { ErrorList } from '#app/components/forms.tsx'
import { prisma } from '#app/utils/db.server.ts'
import { cn, useDelayedIsPending } from '#app/utils/misc.tsx'

const ContactMessageSearchResultSchema = z.object({
	id: z.string(),
	status: z.string(),
	name: z.string(),
	email: z.string(),
	message: z
		.string()
		.nullish()
		.transform(x => x ?? undefined),
	createdAt: z.date(),
})

const ContactMessageSearchResultsSchema = z.array(
	ContactMessageSearchResultSchema,
)

export async function loader({ request }: DataFunctionArgs) {
	const searchTerm = new URL(request.url).searchParams.get('search')
	if (searchTerm === '') {
		return redirect('/admin/contact-messages')
	}
	const like = `%${searchTerm ?? ''}%`

	const limit = 50 //#later make dynamic load or some kind of pagination/continue load
	const rawContactMessages = await prisma.$queryRaw`
		SELECT ContactMessage.id, ContactMessage.status, ContactMessage.name, ContactMessage.email, ContactMessage.message, ContactMessage.createdAt, ContactMessage.createdAtString
		FROM ContactMessage
		WHERE ContactMessage.email LIKE ${like}
		OR ContactMessage.name LIKE ${like}
		OR ContactMessage.message LIKE ${like}
		ORDER BY (ContactMessage.createdAt) DESC
		LIMIT ${limit}
	`

	const result = ContactMessageSearchResultsSchema.safeParse(rawContactMessages)
	if (!result.success) {
		return json({ status: 'error', error: result.error.message } as const, {
			status: 400,
		})
	}
	return json({ status: 'idle', contactMessages: result.data } as const)
}

export default function ContactMessagesRoute() {
	const data = useLoaderData<typeof loader>()
	const isPending = useDelayedIsPending({
		formMethod: 'GET',
		formAction: '/admin/contact-messages',
	})

	if (data.status === 'error') {
		console.error(data.error)
	}

	return (
		<div className="max-w-7xl p-2 md:p-6">
			<div className="mb-12 max-sm:text-center">
				<h2 className="mb-2 text-h2 capitalize text-foreground">
					contactMessages overview
				</h2>
				<p className="text-xl">
					View or change all Your property’s contactMessages at one place.
				</p>
			</div>

			<div className="mb-24 max-sm:text-center">
				<div className="w-full">
					<FiltersWithSearchAndCalendar
						actionUrl="admin/contact-messages"
						status={data.status}
						autoSubmit
					/>
				</div>
			</div>

			<div>
				{data.status === 'idle' ? (
					data.contactMessages.length ? (
						<div
							className={cn(
								'flex w-full flex-wrap items-center justify-center gap-4 delay-200',
								{ 'opacity-50': isPending },
							)}
						>
							{data.contactMessages.map(contactMessage => (
								<div key={contactMessage.id} className="relative w-full">
									{format(new Date(contactMessage.createdAt), 'yyyy/MM/dd') ===
									format(new Date(), 'yyyy/MM/dd') ? (
										<div className="absolute left-[-1em] top-[-1em] rotate-[-20deg] rounded-sm bg-foreground px-2 text-background xl:top-[-.5em] xl:px-4 xl:py-1 2xl:top-[-.2em]">
											new
										</div>
									) : (
										contactMessage.status === 'cancelled' && (
											<>
												<div className="absolute left-[-1em] top-[-1em] rotate-[-20deg] rounded-sm bg-destructive px-2 text-background xl:top-[-.5em] xl:px-4 xl:py-1 2xl:top-[-.2em]">
													cancelled
												</div>
											</>
										)
									)}

									<ContactMessageAccordion
										id={contactMessage.id}
										status={contactMessage.status}
										name={contactMessage.name}
										email={contactMessage.email}
										message={contactMessage.message ?? ''}
										createdAt={new Date(contactMessage.createdAt)}
									/>
								</div>
							))}
						</div>
					) : (
						<p>No contactMessages found</p>
					)
				) : data.status === 'error' ? (
					<ErrorList errors={['There was an error parsing the results']} />
				) : null}
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
