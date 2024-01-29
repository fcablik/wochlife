import { NavLink, Outlet } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioFreelance() {
	return (
		<div>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				personal&nbsp;projects /&nbsp;freelance
			</h3>

			<div className="custom-content-box-height overflow-y-scroll">
				<div className="mb-6 flex gap-3 max-xl:flex-wrap md-to-lg:hidden">
					<NavLink to="remix-ts">
						{({ isActive }) => (
							<Button variant={isActive ? 'highlight' : 'default'}>
								Remix.run / TypeScript Apps
							</Button>
						)}
					</NavLink>

					<NavLink to="reactjs">
						{({ isActive }) => (
							<Button variant={isActive ? 'highlight' : 'default'}>
								ReactJS Apps
							</Button>
						)}
					</NavLink>

					<NavLink to="wp-php-js">
						{({ isActive }) => (
							<Button variant={isActive ? 'highlight' : 'default'}>
								WordPress Apps
							</Button>
						)}
					</NavLink>
				</div>

				<Outlet />
			</div>
		</div>
	)
}
