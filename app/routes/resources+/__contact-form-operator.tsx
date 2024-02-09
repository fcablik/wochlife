import { conform, useForm } from '@conform-to/react'
import { getFieldsetConstraint, parse } from '@conform-to/zod'
import { json, type DataFunctionArgs } from '@remix-run/node'
import {
	Form,
	useActionData,
	useFetcher,
	useFormAction,
	useNavigation,
} from '@remix-run/react'
// import { toast } from 'sonner'
import { format } from 'date-fns'
import { z } from 'zod'
// import { ContactFormEmail } from '#app/components/emails/contact-email.server.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { ErrorList, Field, TextareaField } from '#app/components/forms.tsx'
import { useRedirectWithScrollToTop } from '#app/components/modal-animation.tsx'
import { Icon } from '#app/components/ui/icon.tsx'
import { StatusButton } from '#app/components/ui/status-button.tsx'
import { prisma } from '#app/utils/db.server.ts'
// import { sendEmail } from '#app/utils/email.server.ts'
import { redirectWithToast } from '#app/utils/toast.server.ts'
import { EmailSchema } from '#app/utils/user-validation.ts'

const ContactEditorSchema = z.object({
	id: z.string().optional(),
	createdAtString: z.string(),
	name: z.string(),
	email: EmailSchema,
	message: z.string(),
})

export async function action({
	// params,
	request,
}: DataFunctionArgs) {
	const formData = await request.formData()

	const submission = await parse(formData, {
		schema: ContactEditorSchema.superRefine(async (data, ctx) => {
			if (!data.id) return

			const contact = await prisma.contactMessage.findUnique({
				select: { id: true },
				where: { id: data.id },
			})
			if (!contact) {
				ctx.addIssue({
					code: 'custom',
					message: 'Contact not found',
				})
			}
		}),
		async: true,
	})

	if (submission.intent !== 'submit') {
		return json({ status: 'idle', submission } as const)
	}

	if (!submission.value) {
		return json({ status: 'error', submission } as const, { status: 400 })
	}

	const {
		id: contactId,
		name,
		email,
		message,
		createdAtString,
	} = submission.value

	// const updatedContact = await prisma.contactMessage.upsert({
	await prisma.contactMessage.upsert({
		select: { id: true },
		where: { id: contactId ?? '__new_contact__' },
		create: {
			name,
			email,
			message,
			createdAtString,
		},
		update: {
			name,
			email,
			message,
			createdAtString,
		},
	})

	// !! following commented part used for sending mails
	// const mailMessage =
	// 	'We have successfully received Your created contact. Here are the further steps: ... ...'
	// const subjectMessage = 'Created Contact at Wochdev Hotel'
	// //handling confirmation mail and returning success toast
	// const responseToUser = await sendEmail({
	// 	from: 'Contact Created <noreply@wochdev.com>',
	// 	to: email,
	// 	reply_to: 'contacts@wochdev.com',
	// 	subject: subjectMessage,
	// 	react: (
	// 		<ContactFormEmail email={email} name={name} message={mailMessage} />
	// 	),
	// })

	// if (responseToUser.status === 'success') {
	// 	return redirectWithToast(`/admin/contacts/${updatedContact.id}`, {
	// 		type: 'success',
	// 		title: 'Contact Created!',
	// 		description: 'Your contact has been successfully created.',
	// 	})
	// } else {
	// 	submission.error[''] = [responseToUser.error.message]
	// 	return json(
	// 		{
	// 			status: 'error',
	// 			submission,
	// 		} as const,
	// 		{ status: 500 },
	// 	)
	// }

	return redirectWithToast(`/contact/`, {
		type: 'success',
		title: 'Message Sent!',
		description: `Thanks for contacting me! I'll get back to You ASAP. 🤗`,
	})
}

export function ContactFormOperator() {
	const contactFetcher = useFetcher<typeof action>()

	const actionData = useActionData<typeof action>()
	const formAction = useFormAction()
	const navigation = useNavigation()
	const isSubmitting = navigation.formAction === formAction

	const [form, fields] = useForm({
		id: 'contact-editor',
		constraint: getFieldsetConstraint(ContactEditorSchema),
		lastSubmission: contactFetcher.data?.submission,
		onValidate({ formData }) {
			const parsedData = parse(formData, { schema: ContactEditorSchema })
			console.log(parsedData)
			return parsedData
		},
		defaultValue: {},
	})

	const navigateAndScroll = useRedirectWithScrollToTop()
	const closeContactFormRoute = () => {
		navigateAndScroll('back')
	}

	return (
		<div className="contactModalCustomMaxHeight fixed z-2001 flex flex-col justify-between overflow-scroll rounded-[40px] bg-dark-gradient shadow-lg max-md:bottom-0 max-md:left-0 max-md:max-h-full max-md:w-full md:right-0 md:top-1/2 md:min-w-[500px] md:-translate-y-1/2">
			<div className="relative">
				<div className="my-8 flex items-center justify-between px-8 lg:px-12">
					<div className="flex flex-col justify-between">
						<h5 className="text-h5">Contact Me</h5>
					</div>

					<div className="cursor-pointer" onClick={closeContactFormRoute}>
						<Icon name="cross-1" size="lg" />
					</div>
				</div>

				<Form
					method="post"
					className="flex flex-col"
					{...form.props}
					encType="multipart/form-data"
				>
					{/* element with first slide - slide 1 */}
					<div
						id="contact-form-slide-1"
						className="contactModalSlideCustomHeight"
					>
						<div className="flex flex-col justify-between px-8 lg:px-12">
							{/*
								This hidden submit button is here to ensure that when the user hits
								"enter" on an input field, the primary form function is submitted
								rather than the first button in the form (which was delete/add image).
							*/}
							<button type="submit" className="hidden" />

							<input
								name="createdAtString"
								type="hidden"
								value={format(new Date(), 'yyyy/MM/dd')}
							/>

							<div className="flex flex-col gap-1">
								<Field
									labelProps={{
										children: 'Name',
									}}
									inputProps={{
										...conform.input(fields.name, { ariaAttributes: true }),
										placeholder: 'Your Full Name',
										className: 'bg-backgroundDashboard h-12',
									}}
									errors={fields.name.errors}
								/>
								<Field
									labelProps={{
										children: 'Email',
									}}
									inputProps={{
										...conform.input(fields.email, { ariaAttributes: true }),
										placeholder: 'Your Email Address',
										className: 'bg-backgroundDashboard h-12',
									}}
									errors={fields.email.errors}
								/>

								<TextareaField
									labelProps={{
										children: 'message',
									}}
									textareaProps={{
										...conform.textarea(fields.message, {
											ariaAttributes: true,
										}),
										placeholder: 'Your Message',
										className: 'bg-backgroundDashboard h-12',
									}}
									errors={fields.message.errors}
								/>
							</div>

							<ErrorList id={form.errorId} errors={form.errors} />
						</div>
					</div>
				</Form>

				<div className="mx-8 my-8 flex justify-center lg:mx-12 lg:my-12">
					<StatusButton
						form={form.id}
						type="submit"
						status={isSubmitting ? 'pending' : actionData?.status ?? 'idle'}
						disabled={isSubmitting}
						className="w-2/3 rounded-2xl py-3 capitalize hover:text-foreground"
					>
						send message
					</StatusButton>
				</div>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => (
					<p>No contact with the id "{params.contactId}" exists</p>
				),
			}}
		/>
	)
}
