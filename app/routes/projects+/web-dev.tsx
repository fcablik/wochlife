import { Outlet } from '@remix-run/react'

export default function PortfolioFreelance() {
	return (
		<div>
			<h3 className="mb-6 text-xl md:text-2xl font-semibold capitalize">
				web-dev
			</h3>

			<div className="custom-content-box-height no-scrollbar overflow-scroll">
				<Outlet />
			</div>
		</div>
	)
}
