import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function AboutRouteIndex() {
	return (
		<div>
			<h3 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
				about
			</h3>

			<div className="custom-content-box-height flex flex-col gap-3 overflow-y-scroll">
				<Link to="filip">
					<Button variant="default">about Filip</Button>
				</Link>

				<Link to="wochlife">
					<Button variant="default">about wochlife</Button>
				</Link>
			</div>
		</div>
	)
}
