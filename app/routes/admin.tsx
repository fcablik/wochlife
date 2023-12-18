import { json, type DataFunctionArgs } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'
import UserDropdown from '#app/components/dropdowns/dropdown-user.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { Icon } from '#app/components/ui/icon.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'
import { useUser } from '#app/utils/user.ts'
import { type IconName } from '@/icon-name'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin')
	return json({})
}

function SidebarNavLink({
	routeName,
	title,
	first,
	icon,
	target,
}: {
	routeName: string
	title?: string
	first?: boolean
	icon?: IconName
	target?: '_blank'
}) {
	return (
		<div className={cn(!first ? 'mt-2' : '', 'mb-2')}>
			<NavLink to={routeName} target={target}>
				{({ isActive }) => (
					<Button
						size="dashboardSidebar"
						variant={
							title === 'dashboard' ||
							title === 'facilities' ||
							title === 'galleries'
								? isActive
									? 'dashboardSidebar'
									: 'dashboardSidebar'
								: isActive
								? 'activedashboardSidebar'
								: 'dashboardSidebar'
						}
						className={cn(
							'capitalize before:absolute before:left-0 before:h-12 before:rounded-lg before:border-2 before:border-transparent',
								title === 'dashboard' ||
								title === 'facilities' ||
								title === 'galleries'
								? isActive
									? 'font-bold text-highlight before:border-highlight'
									: 'hover:before:border-highlight'
								: isActive
								? 'before:border-highlight'
								: 'hover:before:border-highlight',
						)}
					>
						<Icon
							size={icon ? 'xl-secondary' : 'xl'}
							name={icon ?? 'caret-right'}
						>
							{title ?? routeName}
						</Icon>
					</Button>
				)}
			</NavLink>
		</div>
	)
}

export default function AdminRoute() {
	const user = useUser()

	const sidebarBoxBaseClasslist =
		'flex flex-col items-center rounded-2xl bg-backgroundDashboard'
	const sidebarMenuBoxClasslist = sidebarBoxBaseClasslist + ' p-6 2xl:p-8 pr-6'
	const sidebarBoxClasslist = sidebarBoxBaseClasslist + ' px-6 2xl:px-8 py-4'
	const sidebarWidthClassList =
		'w-full max-w-[260px] 2xl:max-w-[280px] pt-4 pb-24 2xl:pb-28'

	return (
		<div className="flex items-start justify-center">
			<div className="h-full overflow-hidden">
				<div
					className={cn(
						'fixed h-full overflow-y-auto bg-background pb-[5.5em] max-lg:hidden lg:pr-4 2xl:pr-9',
						sidebarWidthClassList,
					)}
				>
					<div className={cn('mt-2 2xl:mt-6', sidebarMenuBoxClasslist)}>
						<div>
							<SidebarNavLink
								first={true}
								routeName="/"
								title="homepage"
								icon="home"
								target="_blank"
							/>

							<SidebarNavLink
								first={true}
								routeName="/admin/"
								title="dashboard"
								icon="dashboard"
							/>

							<div className="border-b border-t border-highlight/20">
								<SidebarNavLink routeName="brands" />
								<SidebarNavLink routeName="models" />
								<SidebarNavLink
									routeName="models/gallery"
									title="galleries"
									icon="file-text"
								/>
								<SidebarNavLink
									routeName="models/facility"
									title="facilities"
									icon="file-text"
								/>
							</div>

							<SidebarNavLink routeName="dealers" />

							<SidebarNavLink routeName="pages" icon="pencil-2" />
							<SidebarNavLink
								routeName="docs"
								title="help"
								icon="question-mark-circled"
							/>
							<SidebarNavLink routeName="users" icon="avatar" />
							{/* dots-horizontal, file-text, link-2 */}

							<SidebarNavLink routeName="cache" />
						</div>
					</div>

					<div className={cn('mt-4 2xl:mt-8', sidebarBoxClasslist)}>
						{user ? <UserDropdown /> : null}
					</div>
				</div>
			</div>
			<div className={cn('h-full max-lg:hidden', sidebarWidthClassList)} />

			<div className="w-full py-6 2xl:py-10">
				<div className="rounded-3xl bg-backgroundDashboard px-2 py-12 sm:px-4 xl:px-6 2xl:px-16 2xl:py-16">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
