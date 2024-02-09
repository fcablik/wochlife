import { NavLink } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function AboutFilip() {
	return (
		<div className='max-md-to-lg:hidden'>
			<h4 className="mb-6 text-lg font-semibold text-center capitalize md:text-xl">
				Discover More About
			</h4>

			<div className="custom-content-box-height pb-6">
				{/*  overflow-y-scroll */}
				{/* <p className="mb-6">
					Discover more about Me (Filip) or The Wochlife project.
				</p> */}

				<div className="mb-6 flex flex-wrap justify-center gap-3">
					<NavLink to="filip">
						{({ isActive }) => (
							<Button
								className="capitalize"
								variant={isActive ? 'highlight' : 'default'}
							>
								Filip - Developer
							</Button>
						)}
					</NavLink>

					<NavLink to="wochlife">
						{({ isActive }) => (
							<Button
								className="capitalize"
								variant={isActive ? 'highlight' : 'default'}
							>
								Wochlife - Brand
							</Button>
						)}
					</NavLink>
				</div>
			</div>
		</div>
	)
}
