import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioFreelanceIndex() {
	return (
		<>
			<h3>1st job</h3>
			<p>1st description</p>
			<Link to="">
				<Button variant="default">1st job</Button>
			</Link>

			<h3>2nd job</h3>
			<p>2nd description</p>
			<Link to="">
				<Button variant="default">2nd job</Button>
			</Link>

			<h3>3rd job</h3>
			<p>3rd description</p>
			<Link to="">
				<Button variant="default">3rd job</Button>
			</Link>
		</>
	)
}
