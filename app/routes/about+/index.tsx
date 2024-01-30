import { NavLink } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function AboutFilip() {
	return (
		<>
			<div className="custom-content-box-height">
				{/*  overflow-y-scroll */}
				{/* <p className="mb-6">
					Discover more about Me (Filip) or The Wochlife project.
				</p> */}

				<div className="mb-6 flex gap-3 flex-wrap max-lg:hidden justify-center">
					<NavLink to="filip">
						{({ isActive }) => (
							<Button className="capitalize" variant={isActive ? 'highlight' : 'default'}>
								About Filip
							</Button>
						)}
					</NavLink>

					<NavLink to="wochlife">
						{({ isActive }) => (
							<Button className="capitalize" variant={isActive ? 'highlight' : 'default'}>
								About Wochlife
							</Button>
						)}
					</NavLink>
				</div>
			</div>
		</>
	)
}
