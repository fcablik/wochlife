import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'
import { Icon } from '#app/components/ui/icon.tsx'

export default function AboutFilip() {
	return (
		<div className="max-md-to-lg:mt-6">
			<h4 className="mb-6 text-lg font-semibold capitalize md:text-xl">
				about filip
			</h4>

			<div className="custom-content-box-height overflow-y-scroll ">
				<div>
					<p className="mb-6">
						Hey, I'm Filip. A very passionate Fullstack Web Developer. <br />I
						like to discover and learn new tech, frameworks & services.
						Continuous progress, learning and small steps ahead is what makes my
						job and life so awesome. I love to solve problems, in both logical
						and graphical ways.
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
							<Button size="sm" variant="highlight-secondary">
								LinkedIn
							</Button>
						</a>
					</div>

					<div className="mb-12">
						<p className="mb-4">Or take a look at my portfolio overview.</p>
						<Link to="/portfolio">
							<Button size="sm" variant="highlight-secondary">
								Portfolio
							</Button>
						</Link>
					</div>

					<div className='mb-4'>
						<p className="mb-2 font-bold capitalize">Quick overview of my sources of knowledge since the day 0.</p>
						<p>0. Self-education in Software & Hardware during youth</p>
						<p>1. High school with specialization in IT systems</p>
						<p>2. Self-education of base coding to get into SW development</p>
						<p>3. Front End Dev <Icon name="arrow-right" /> Building real-life client apps</p>
						<p>4. Front End Dev <Icon name="arrow-right" /> Employment experiences - frameworks, languages, systems, tools, services </p>
						<p>5. Full Stack Dev <Icon name="arrow-right" /> Freelancer inside company projects - education in new frameworks, practices & services </p>
						<p>5. Full Stack <Icon name="arrow-right" /> Advanced self-education with online-courses and development of real Full-Stack Applications</p>
					</div>

					<div className='flex flex-wrap gap-3 items-center mb-4'>
					<p>find more</p>
					<Link to="/portfolio">
						<Button size="sm" variant="highlight-secondary">
							in portfolio
						</Button>
					</Link>
					<Link to="/projects">
						<Button size="sm" variant="highlight-secondary">
							in projects
						</Button>
					</Link>
					<a href="https://github.com/fcablik/" target='_blank' rel="noreferrer">
						<Button size="sm" variant="highlight-secondary">
							or github
						</Button>
					</a>
					</div>
				</div>
			</div>
		</div>
	)
}
