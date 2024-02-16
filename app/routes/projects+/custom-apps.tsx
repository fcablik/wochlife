import { Button } from "#app/components/ui/button.tsx"

export default function ProjectCustomAppsRoute() {
	return (
		<div className="max-md-to-lg:mt-6">
			<h3 className="mb-8 text-xl font-semibold capitalize md:text-2xl">
				custom apps
			</h3>

			<div className="custom-content-box-height">
				{/* overflow-y-scroll */}
				{/* custom apps content */}
				<div className="mb-6">
					<p className="mb-4">I develop custom applications with my Wochlife Stack. Discover more in this applications' GitHub repository:</p>
					<a
						href="https://github.com/fcablik/wochlife.com"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="highlight-secondary">
							GitHub wochlife.com
						</Button>
					</a>
				</div>
			</div>
		</div>
	)
}
