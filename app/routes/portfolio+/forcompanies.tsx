import { NavLink, Outlet } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioForCompanies() {
	return (
		<div className='custom-content-box-height overflow-y-scroll'>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				company projects
			</h3>

			<>
				<div className="mb-6 flex gap-3 flex-wrap md-to-lg:hidden">
					<NavLink to="11ts">
						{({ isActive }) => (
							<Button variant={isActive ? 'highlight' : 'default'}>
								Freelance in 11teamsports
							</Button>
						)}
					</NavLink>

					<NavLink to="t4s">
						{({ isActive }) => (
							<Button variant={isActive ? 'highlight' : 'default'}>
								Freelance in Top4Sport
							</Button>
						)}
					</NavLink>

					<NavLink to="medi">
						{({ isActive }) => (
							<Button variant={isActive ? 'highlight' : 'default'}>
								Employed in medi
							</Button>
						)}
					</NavLink>
				</div>

				<Outlet />
			</>
		</div>
	)
}
