import wordpress from '#app/components/logos/wordpress.svg'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.tsx'

export default function PortfolioFreelanceWordpress() {
	return (
		<>
			<h4 className="mb-2 text-lg">Wordpress / PHP / JavaScript / css</h4>

			<div>
				<li>
					custom theme and templates development + custom webs development for
					clients
				</li>

				<ul className="grid grid-cols-4 gap-3 py-8 sm:grid-cols-5 md:gap-5 md:px-4 lg:grid-cols-6 xl:grid-cols-8">
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
					</TooltipProvider>
				</ul>
			</div>
		</>
	)
}
