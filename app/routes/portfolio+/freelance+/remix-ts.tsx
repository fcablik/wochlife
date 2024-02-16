import { customHashtagListStyleClasslist } from '#app/components/classlists.tsx'
import { logos } from '#app/components/logos/logos.ts'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.tsx'

export default function PortfolioFreelanceRemixTypescript() {
	return (
		<div className='custom-content-box-height overflow-y-scroll'>
			<h4 className="mb-2 text-lg">
				Remix.run / TypeScript / Prisma / SQLite / TailwindCSS
			</h4>

			<div>
				<ul className="pl-2">
					<li className={customHashtagListStyleClasslist}>
						using this stack&nbsp;<strong>since 2022</strong>	
					</li>
					<li className={customHashtagListStyleClasslist}>
						custom built progressive web applications, both from the ground up and
						with a usage of starting templates as provided by Remix and then with
						epic-stack by Kent C. Dodds
					</li>
					<li className={customHashtagListStyleClasslist}>
						custom components for custom apps
					</li>
				</ul>

				<ul className="grid grid-cols-4 gap-3 py-8 sm:grid-cols-5 md:gap-3 xl:gap-5 lg:grid-cols-7 xl:grid-cols-8">
					<TooltipProvider>
						{logos.map((logo, i) => (
							<li
								key={logo.href}
								className="animate-roll-reveal flex rounded-xl bg-foreground/90 transition [animation-fill-mode:backwards] hover:-rotate-[-6deg] hover:bg-violet-200 md:rounded-2xl"
								style={{ animationDelay: `${i * 0.07}s` }}
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<a
											href={logo.href}
											className="grid h-full w-full place-items-center p-2 md:p-3"
											target="_blank"
											rel="noreferrer"
										>
											<img src={logo.src} alt="" />
										</a>
									</TooltipTrigger>
									<TooltipContent>{logo.alt}</TooltipContent>
								</Tooltip>
							</li>
						))}
					</TooltipProvider>
				</ul>
			</div>
		</div>
	)
}
