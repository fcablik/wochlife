import bootstrap from '#app/components/logos/bootstrap.svg'
import ESLint from '#app/components/logos/eslint.svg'
import github from '#app/components/logos/github.svg'
import prettier from '#app/components/logos/prettier.svg'
import reactjs from '#app/components/logos/reactjs.svg'
import sass from '#app/components/logos/sass.svg'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.tsx'

export default function PortfolioFreelanceReactJS() {
	return (
		<>
			<h4 className="mb-2 text-lg">ReactJS / Sass / JavaScript / css</h4>

			<div>
				<li>using this stack <strong>since 2020</strong></li>
				<li>
					custom built applications, both for clients and for services and tools
					testing
				</li>

				<ul className="grid grid-cols-4 gap-3 py-8 sm:grid-cols-5 md:gap-5 md:px-4 lg:grid-cols-6 xl:grid-cols-8">
					<TooltipProvider>
						<li
							key="reactjs"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://react.dev/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={reactjs} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>ReactJS</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="sass"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://sass-lang.com/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={sass} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>Sass</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="bootstrap"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://getbootstrap.com/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={bootstrap} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>Bootstrap</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="prettier"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://prettier.io/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={prettier} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>Prettier</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="eslint"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://eslint.org/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={ESLint} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>ESLint</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="github"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://github.com/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={github} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>GitHub</TooltipContent>
							</Tooltip>
						</li>
					</TooltipProvider>
				</ul>
			</div>
		</>
	)
}
