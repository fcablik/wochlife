import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioFreelance() {
	return (
		<div>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				Accommodations Management Applications
			</h3>

			<div className="custom-content-box-height">
				{/* overflow-y-scroll */}
				{/* Accommodations Apps content */}
				<div className="mb-6">
					<p className="mb-4">Discover more from the GitHub repo:</p>
					<a
						href="https://github.com/fcablik/wochlife-accomodations"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="highlight-secondary">
							Wochlife Accommodations
						</Button>
					</a>
				</div>
			</div>
		</div>
	)
}
