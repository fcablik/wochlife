import { Button } from '#app/components/ui/button.tsx'

export default function ProjectAccommodationsAppsRoute() {
	return (
		<div className="max-md-to-lg:mt-6">
			<h3 className="mb-8 text-xl font-semibold capitalize md:text-2xl">
				Accommodations Management Applications
			</h3>

			<div className="custom-content-box-height">
				{/* overflow-y-scroll */}
				{/* Accommodations Apps content */}
				<div className="mb-8">
					<p className="mb-4">Discover more from the GitHub repo:</p>
					<a
						href="https://github.com/fcablik/wochlife-accomodations"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="highlight-secondary">
							GitHub Wochlife Accommodations
						</Button>
					</a>
				</div>

				<div className="mb-6">
					<p className="mb-4">Or discover the staging app:</p>
					<a
						href="https://wochlife-accommodations.fly.dev/"
						target="_blank"
						rel="noreferrer"
					>
						<Button size="sm" variant="default">
							wochlife-accommodations.fly.dev
						</Button>
					</a>
				</div>
			</div>
		</div>
	)
}
