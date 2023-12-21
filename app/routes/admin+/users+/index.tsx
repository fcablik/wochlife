import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { prisma } from '#app/utils/db.server.ts'
import { getUserImgSrc } from '#app/utils/misc.tsx'

export async function loader() {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			username: true,
			name: true,
			image: {
				select: {
					id: true,
				}
			}
		},
	})
	return json({ users })
}

export default function UsersRoute() {
	const data = useLoaderData<typeof loader>()
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-8">
			<h3 className="mb-8 text-h3 sm:text-h2">Wochlife Users</h3>

			<div>
				{data.users.length ? (
					<ul className="flex w-full flex-wrap items-center justify-center gap-4 delay-200">
						{data.users.map(user => (
							<li key={user.id}>
								<Link
									to={user.username}
									className="flex h-36 w-44 flex-col items-center justify-center rounded-lg bg-muted px-5 py-3"
								>
									<img
										alt={user.name ?? user.username}
										src={getUserImgSrc(user.image?.id)}
										className="h-16 w-16 rounded-full"
									/>
									{user.name ? (
										<span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-body-md">
											{user.name}
										</span>
									) : null}
									<span className="w-full overflow-hidden text-ellipsis text-center text-body-sm text-muted-foreground">
										{user.username}
									</span>
								</Link>
							</li>
						))}
					</ul>
				) : (
					<p>No users found</p>
				)}
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
