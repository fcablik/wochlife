import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioFreelance() {
	return (
		<div>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				portfolio
			</h3>

			<div className="custom-content-box-height flex flex-wrap gap-3 overflow-y-scroll">
				<Link to="freelance" prefetch="intent">
					<Button className="capitalize" variant="default">
						freelance
					</Button>
				</Link>

				<Link to="forcompanies" prefetch="intent">
					<Button className="capitalize" variant="default">
						for companies
					</Button>
				</Link>
			</div>
		</div>
	)
}
