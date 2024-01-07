import { Outlet } from '@remix-run/react'

export default function PortfolioForCompanies() {
	return (
		<div>
			<h3 className="mb-6 text-xl md:text-2xl font-semibold capitalize">
				for companies
			</h3>

			<div className="custom-content-box-height overflow-y-scroll">
				<Outlet />
			</div>
		</div>
	)
}
