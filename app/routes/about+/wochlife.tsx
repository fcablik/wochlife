import { Link } from '@remix-run/react'

export default function AboutWochlife() {
	return (
		<div className='max-md-to-lg:mt-6'>
			<h4 className="mb-6 text-lg font-semibold capitalize md:text-xl">
				about wochlife
			</h4>

			<div className="custom-content-box-height pb-6">
				{/* overflow-y-scroll */}
				<p className="mb-4">
					Wochlife is a brand created to bring a meaning:
					<br />
					Woch | life = "World Of Chaos & Life", a.k.a. life in chaos.
				</p>
				<p className="mb-4">
					Because everyday-life can be really chaotic, the brand is supposed to significantly
					bring a purpose of reducing chaos by providing various services, tools
					or products.
				</p>
				<p className='mb-8'>
					Wochlife is not only a SW brand. More about purpose coming soon.. In
					the meantime, You can discover more projects in the{' '}
					<Link
						to="/projects"
						className="underline transition hover:text-highlight"
					>
						projects
					</Link>{' '}
					section
				</p>

				<h4 className='text-lg'>
					This Wochlife App serves 2&nbsp;goals:
				</h4>
				<h5 className='text-sm'>
					<li>creating awareness about its purpose</li>
					<li>as my personal portfolio and&nbsp;work overview</li>
				</h5>
			</div>
		</div>
	)
}
