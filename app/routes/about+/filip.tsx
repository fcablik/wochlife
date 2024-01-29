import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function AboutFilip() {
	return (
		<div className='max-md-to-lg:mt-6'>
			<h4 className="mb-6 text-lg font-semibold capitalize md:text-xl">
				about filip
			</h4>

			<div className="custom-content-box-height pb-6">
				{/* overflow-y-scroll */}
				<p className="mb-6">
					Hey, I'm Filip. A very passionate Fullstack Web Developer. <br />I
					like to discover and learn new tech, frameworks & services. Continuous
					progress, learning and small steps ahead is what makes my job and life
					so awesome. I love to solve problems, in both logical and graphical
					ways.
				</p>
				<div className="mb-8">
					<p className="mb-4">
						I could write a lot here..
						<br />
						Or you can just head over to my LinkedIn.. 😀
					</p>
					<a
						href="https://www.linkedin.com/in/filipcablik/"
						target="_blank"
						rel="noreferrer"
					>
						<Button size="sm" variant="highlight-secondary">LinkedIn</Button>
					</a>
				</div>

				<div className="mb-4">
					<p className="mb-4">Or take a look at my portfolio overview.</p>
					<Link to="/portfolio">
						<Button size="sm" variant="highlight-secondary">Portfolio</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
