import css from '#app/components/logos/css-3.svg'
import html from '#app/components/logos/html.svg'
import javascript from '#app/components/logos/javascript.svg'
import php from '#app/components/logos/php.svg'
import wordpress from '#app/components/logos/wordpress.svg'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.tsx'

export default function PortfolioFreelanceWordpress() {
	return (
		<div className='custom-content-box-height'>
			<h4 className="mb-2 text-lg">Wordpress / PHP / JavaScript / css</h4>

			<div>
				<li>used this stack <strong>2019 - 2021</strong></li>
				<li>
					custom theme and templates development + custom webs development for
					clients
				</li>

				<ul className="grid grid-cols-4 gap-3 py-8 sm:grid-cols-5 md:gap-5 md:px-4 xl:grid-cols-7">
					<TooltipProvider>
						<li
							key="wordpress"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] hover:bg-violet-200 md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://wordpress.com/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={wordpress} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>WordPress</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="php"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] hover:bg-violet-200 md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://www.php.net/"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={php} alt="" />
									</a>
								</TooltipTrigger>
								<TooltipContent>php</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="javascript"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] hover:bg-violet-200 md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={javascript} alt="" className='max-h-[70px]' />
									</a>
								</TooltipTrigger>
								<TooltipContent>JavaScript</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="css"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] hover:bg-violet-200 md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://developer.mozilla.org/en-US/docs/Web/CSS"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={css} alt="" className='max-h-[70px]' />
									</a>
								</TooltipTrigger>
								<TooltipContent>CSS</TooltipContent>
							</Tooltip>
						</li>

						<li
							key="html"
							className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] hover:bg-violet-200 md:rounded-2xl"
							style={{ animationDelay: `${1 * 0.07}s` }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://developer.mozilla.org/en-US/docs/Web/html"
										className="grid h-full w-full place-items-center p-2 md:p-3"
										target="_blank"
										rel="noreferrer"
									>
										<img src={html} alt="" className='max-h-[70px]' />
									</a>
								</TooltipTrigger>
								<TooltipContent>HTML</TooltipContent>
							</Tooltip>
						</li>
					</TooltipProvider>
				</ul>
			</div>
		</div>
	)
}
