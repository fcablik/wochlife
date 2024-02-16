import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioFreelance() {
	return (
		<div>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				portfolio
			</h3>

			<div className="custom-content-box-height">
				<p className="mb-4">
					<span>
						In each category, you'll find unique skills I've been using in its
						various projects.
					</span>
					<br />
					Proceed to discover more about..
				</p>

				<div>
					<div className="mb-8">
						<p className="mb-2">My freelance work for clients:</p>
						<Link to="freelance" prefetch="intent">
							<Button
								size="sm"
								className="capitalize"
								variant="highlight-secondary"
							>
								freelance
							</Button>
						</Link>
					</div>

					<div className="mb-8">
						<p className="mb-2">My work in company projects:</p>
						<Link to="forcompanies" prefetch="intent">
							<Button
								size="sm"
								className="capitalize"
								variant="highlight-secondary"
							>
								for companies
							</Button>
						</Link>
					</div>

					<div className="mb-8">
						<p className="mb-2">Find out more about me personally.</p>
						<Link to="/about" prefetch="intent">
							<Button size="sm" className="capitalize" variant="default">
								about
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
