import { Outlet } from '@remix-run/react'

export default function PortfolioForCompanies() {
	return (
		<div>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				company projects
			</h3>

			<div className="custom-content-box-height overflow-y-scroll">
				<Outlet />
			</div>
		</div>
	)
}
