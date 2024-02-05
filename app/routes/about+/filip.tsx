import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'
import { Icon } from '#app/components/ui/icon.tsx'

export default function AboutFilip() {
	return (
		<div className="max-md-to-lg:mt-6">
			<h4 className="mb-6 text-lg font-semibold capitalize md:text-xl">
				about filip
			</h4>

			<div className="custom-content-box-height overflow-y-scroll">
				<div>
					<p className="mb-6">
						Hey, I'm Filip. A very passionate FullStack Web Developer. <br />I
						like to discover and learn new tech, frameworks & services.
						Continuous progress, learning and small steps ahead is what makes my
						job and life so awesome. I love to solve problems, in both logical
						and graphical ways.
					</p>
					<div className="mb-6">
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

					<div className="mb-8">
						<p className="mb-4">..or take a look at my portfolio overview.</p>
						<Link to="/portfolio">
							<Button size="sm" variant="highlight-secondary">
								Portfolio
							</Button>
						</Link>
					</div>

					<div className="mb-6">
						<p className="mb-4 font-bold capitalize">
							Quick overview of my sources of knowledge since the day 0.
						</p>
						<p className="mb-2">
							0. Self-education in Software & Hardware during youth
						</p>
						<p className="mb-2">
							1. High school with specialization in IT systems
						</p>
						<p className="mb-2">
							2. Self-education of base coding to get into SW development
						</p>
						<p className="mb-2">
							3. Front End Dev <Icon name="arrow-right" /> Building real-life
							client apps
						</p>
						<p className="mb-2">
							4. Front End Dev <Icon name="arrow-right" /> Employment
							experiences - frameworks, languages, systems, tools, services
						</p>
						<p className="mb-2">
							5. Full Stack Dev <Icon name="arrow-right" /> Freelancer inside
							company projects - education in new frameworks, practices &
							services
						</p>
						<p className="mb-2">
							6. Full Stack <Icon name="arrow-right" /> Advanced self-education
							with online-courses and development of real-use Full-Stack
							Applications, focusing on Remix.run with TypeScript:
							<br />
							<span className="ml-2">
								<Icon className="mb-[.1rem]" name="caret-right" />{' '}
								<a
									href="https://www.epicweb.dev/"
									className="underline transition hover:text-highlight"
									target="_blank"
									rel="noreferrer"
								>
									EpicWeb.dev
								</a>
							</span>
							<br />
							<span className="ml-2">
								<Icon className="mb-[.1rem]" name="caret-right" />{' '}
								<a
									href="https://kentcdodds.com/courses"
									className="underline transition hover:text-highlight"
									target="_blank"
									rel="noreferrer"
								>
									Kent C Dodds as a teacher
								</a>
							</span>
							<br />
							<span className="ml-2">
								<Icon className="mb-[.1rem]" name="caret-right" />{' '}
								<a
									href="https://www.epicweb.dev/epic-stack"
									className="underline transition hover:text-highlight"
									target="_blank"
									rel="noreferrer"
								>
									Remix.run - Epic-Stack Projects
								</a>
								(
								<a
									href="https://github.com/epicweb-dev/epic-stack"
									className="underline transition hover:text-highlight"
									target="_blank"
									rel="noreferrer"
								>
									GitHub Repo
								</a>
								)
							</span>
						</p>

						<p className="mb-2">
							7. Full Stack <Icon name="arrow-right" /> Other advanced
							self-education in the sphere of Full Stack Web Development:
							<br />
							<span className="ml-2">
								<Icon className="mb-[.1rem]" name="caret-right" />{' '}
								<a
									href="https://fullstackopen.com/en/"
									className="underline transition hover:text-highlight"
									target="_blank"
									rel="noreferrer"
								>
									Full Stack open
								</a>
							</span>
							<br />
							<span className="ml-2">
								<Icon className="mb-[.1rem]" name="caret-right" />{' '}
								<a
									href="https://frontendmasters.com/"
									className="underline transition hover:text-highlight"
									target="_blank"
									rel="noreferrer"
								>
									Frontend Masters
								</a>
							</span>
							<br />
							<span className="ml-2">
								<Icon className="mb-[.1rem]" name="caret-right" />{' '}
								+As all the devs know, YouTube videos & AI.. 😊
							</span>
						</p>
					</div>

					<div className="mb-4 flex flex-wrap items-center gap-3">
						<p className="capitalize">find more</p>
						<Link to="/portfolio">
							<Button
								className="capitalize"
								size="xs"
								variant="highlight-secondary"
							>
								in portfolio
							</Button>
						</Link>
						<Link to="/projects">
							<Button
								className="capitalize"
								size="xs"
								variant="highlight-secondary"
							>
								in projects
							</Button>
						</Link>
						<a
							href="https://github.com/fcablik/"
							target="_blank"
							rel="noreferrer"
						>
							<Button
								className="capitalize"
								size="xs"
								variant="highlight-secondary"
							>
								or github
							</Button>
						</a>

						<p className="text-xs">
							** In case of interest, I'll provide an access into my private
							GitHub Repositories.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
