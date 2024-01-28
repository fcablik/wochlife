import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioFreelanceIndex() {
	return (
		<>
			<div className="grid gap-3">
				<Link to="remix-ts">
					<Button variant="default">Remix.run / TypeScript Apps</Button>
				</Link>

				<Link to="reactjs">
					<Button variant="default">ReactJS Apps</Button>
				</Link>

				<Link to="wp-php-js">
					<Button variant="default">WordPress Apps</Button>
				</Link>
			</div>
		</>
	)
}
