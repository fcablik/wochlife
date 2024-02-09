import { Link } from '@remix-run/react'

export default function AboutWochlifeRoute() {
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
				<p>
					Wochlife is not only a SW brand. But more about purpose coming soon..
				</p>

				<p className='mb-6'>In
					the meantime, You can discover more projects in the{' '}
					<Link
						to="/projects"
						className="underline transition hover:text-highlight"
					>
						projects
					</Link>{' '}
					section</p>

				<h4 className='text-lg'>
					This wochlife.com application serves 2&nbsp;goals:
				</h4>
				<p>
					<li>as my personal portfolio and&nbsp;work overview</li>
					<li>creating awareness about the brand's purpose</li>
				</p>
			</div>
		</div>
	)
}
