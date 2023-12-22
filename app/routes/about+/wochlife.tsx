import { Outlet } from '@remix-run/react'

export default function PortfolioFreelance() {
	return (
		<div>
			<h3 className="mb-6 text-center text-2xl font-semibold capitalize">
				about wochlife
			</h3>

			<div className="custom-content-box-height no-scrollbar overflow-scroll">
				<Outlet />
			</div>
		</div>
	)
}
