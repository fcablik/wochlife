import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioForCompaniesIndex() {
	return (
		<div className="grid gap-3 max-md-to-lg:hidden">
			<Link to="11ts">
				<Button variant="default">Freelance in 11teamsports</Button>
			</Link>

			<Link to="t4s">
				<Button variant="default">Freelance in Top4Sport</Button>
			</Link>

			<Link to="medi">
				<Button variant="default">Employed In Medi</Button>
			</Link>
		</div>
	)
}
