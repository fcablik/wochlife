import { Outlet } from '@remix-run/react'

export default function PortfolioFreelance() {
	return (
		<div>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				personal&nbsp;projects /&nbsp;freelance&nbsp;clients
			</h3>

			<div className="custom-content-box-height overflow-y-scroll">
				<Outlet />
			</div>
		</div>
	)
}
