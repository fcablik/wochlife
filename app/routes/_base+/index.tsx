import {
	type MetaFunction,
	// type DataFunctionArgs
} from '@remix-run/node'
import { Link } from '@remix-run/react'
import {
	bigBoxTitle,
	boxInnerContentBoxInnerBox,
	boxProps,
	darkBoxBgClassList,
	darkBoxInnerContentBox,
	innerContentBoxTexts,
	purpleBoxBgClassList,
	purpleBoxInnerContentBox,
} from '#app/components/classlists.tsx'
import { LogoPhil, LogoWochlife } from '#app/components/logos.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { cn } from '#app/utils/misc.tsx'
// import { requireUserWithRole } from '#app/utils/permissions.ts'

// export async function loader({ request }: DataFunctionArgs) {
// 	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
// 	return null
// }

export default function Index() {
	//* styling classes
	// 1. grid, responsivness
	const col1 = 'w-full lg:w-3/4 lg-to-xl-3:w-2/5 flex flex-col justify-end'
	const col2 = 'flex w-full gap-8 max-lg:flex-col lg-to-xl-3:w-3/5'
	const col2_col1 = 'custom-max-heights w-full lg:w-1/2 lg-to-xl-3:w-[44.17%]'
	const col2_col2 =
		'custom-max-heights w-full lg:w-1/2 lg-to-xl-3:w-[55.83%] flex flex-col justify-between'

	const purpleBoxBgClassListSm =
		boxProps +
		' bg-purple-box-gradient justify-between items-center pb-5 w-1/2 min-h-[175px] lg:h-[225px] lg-to-xl:h-[185px] 2xl:h-[195px] 4xl:h-[215px]'

	//* copy translations
	const welcomeTitle = 'Welcome <br /> to Wochlife'
	const welcomeSubTitle = "the phil's little world"
	const welcomeBoxText =
		"<p class='mb-3 md:mb-5'>Hey, I'm Phil.</p><p class='mb-3 md:mb-5'>Web Developer with<br class='sm:hidden'/> passion for combining tech <br class='sm:hidden'/>&&nbsp;design.</p>Applications are not just a&nbsp;product to me, it's a&nbsp;form of an&nbsp;art, an expression. My apps show the world, who You are."

	// "Applications are not just a product to me, it's a form of an art, an expression. My apps show the world who You are.

	const aboutText = 'about'
	const discoverText = 'discover'

	return (
		<div className="custom-hp-spacing mx-auto flex gap-8 max-xl:px-4 max-lg-to-xl-3:flex-col md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]">
			<div className={col1}>
				<h1 className="mt-24 text-h1-sm opacity-90 max-lg:ml-2 max-lg:text-h3 lg:mt-8 lg:text-h1-md 3xl:text-h1">
					<div dangerouslySetInnerHTML={{ __html: welcomeTitle }} />
				</h1>
				<h2 className="mt-2 text-xl capitalize opacity-80 max-lg:ml-2 max-md:text-[.945rem] 3xl:text-xl-to-2xl">
					{welcomeSubTitle}
				</h2>

				<div
					className={cn(
						darkBoxBgClassList,
						'custom-max-margin-welcome-box relative p-6 lg:p-10',
					)}
				>
					<div className="max-w-[90%] opacity-90 md:max-w-[80%] 2xl:text-md 3xl:text-md-to-lg">
						<span dangerouslySetInnerHTML={{ __html: welcomeBoxText }} />
					</div>

					<div
						className={cn(
							'absolute overflow-x-hidden max-lg-to-xl-3:scale-x-flip max-md:overflow-x-hidden',
							'top-[-8em] sm:top-[-10em] md:right-[-3.5em] lg:top-[-9em] xl:top-[-8em] 2xl:top-[-9em] 3xl:top-[-3em]',
							'right-[-1em] xl:right-[-5em] 2xl:right-[-4em]',
						)}
					>
						<img
							src="/img/woch_testing_4.png"
							alt=""
							className="max-lg:max-w-[10rem]"
						/>
					</div>
				</div>
			</div>

			<div className={col2}>
				<div className={cn(darkBoxBgClassList, col2_col1)}>
					<h3 className={bigBoxTitle}>portfolio</h3>

					<h5 className="mb-3 text-center text-lg capitalize">
						<Link
							to="portfolio/freelance"
							className="transition-colors hover:text-highlight"
						>
							freelance
						</Link>
					</h5>
					<div className="no-scrollbar custom-content-sections-height overflow-y-scroll rounded-xl-to-2xl">
						<Link to="portfolio/freelance">
							<PortfolioContentBox
								name="coming soon.."
								description="2020, Code"
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						</Link>
						<Link to="portfolio/freelance">
							<PortfolioContentBox
								name="coming soon.."
								description="2019, Design + Code"
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						</Link>
						<Link to="portfolio/freelance">
							<PortfolioContentBox
								name="coming soon.."
								description="2019, Design + Code"
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						</Link>
						<Link to="portfolio/freelance">
							<PortfolioContentBox
								boxClass="mb-0 4xl:mb-0"
								name="coming soon.."
								description="2019, Code -1st project"
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						</Link>
					</div>

					<h5 className="mb-3 mt-6 text-center text-lg capitalize">
						<Link
							to="portfolio/forcompanies"
							className="transition-colors hover:text-highlight"
						>
							for companies
						</Link>
					</h5>
					<div className="no-scrollbar custom-content-sections-height overflow-y-scroll rounded-xl-to-2xl">
						<Link to="portfolio">
							<PortfolioContentBox
								innerBoxClass="bg-medi-radial-gradient"
								name="coming soon.."
								description="2020-2022"
							/>
						</Link>
						<Link to="portfolio">
							<PortfolioContentBox
								innerBoxClass="bg-t4s-radial-gradient"
								name="coming soon.."
								description="2022-present"
							/>
						</Link>
						<Link to="portfolio">
							<PortfolioContentBox
								innerBoxClass="bg-11ts-radial-gradient"
								name="coming soon.."
								description="2022-present"
							/>
						</Link>
						{/* <Link to="portfolio/forcompanies/medi">
							<PortfolioContentBox
								innerBoxClass="bg-medi-radial-gradient"
								imgSrc="/img/medi.webp"
								name="medi.de/cz"
								description="2020-2022"
							/>
						</Link>
						<Link to="portfolio/forcompanies/t4s">
							<PortfolioContentBox
								innerBoxClass="bg-t4s-radial-gradient"
								imgSrc="/img/t4s.webp"
								name="top4sport.com"
								description="2022-present"
							/>
						</Link>
						<Link to="portfolio/forcompanies/11ts">
							<PortfolioContentBox
								innerBoxClass="bg-11ts-radial-gradient"
								imgSrc="/img/11ts.webp"
								name="11teamsports.com"
								description="2022-present"
							/>
						</Link> */}
					</div>
				</div>

				<div className={col2_col2}>
					<div className="flex w-full gap-5">
						<div className={purpleBoxBgClassListSm}>
							<h3 className="text-xl font-semibold capitalize">{aboutText}</h3>

							<LogoPhil className="max-md:max-h-[24px]" />

							<Link to="about/phil" className="w-full">
								<Button className="w-full text-md capitalize" variant="default">
									{discoverText}
								</Button>
							</Link>
						</div>

						<div className={purpleBoxBgClassListSm}>
							<h3 className="text-xl font-semibold capitalize">{aboutText}</h3>

							<LogoWochlife className="max-md:max-h-[20px]" />

							<Link to="about/wochlife" className="w-full">
								<Button className="w-full capitalize" variant="default">
									{discoverText}
								</Button>
							</Link>
						</div>
					</div>

					<div
						className={cn(
							purpleBoxBgClassList,
							'custom-projects-box-max-height h-full max-md:mt-6',
						)}
					>
						<h3 className={bigBoxTitle}>
							<Link
								to="projects"
								className="hover:bg-dark-gradient transition-colors hover:bg-clip-text  hover:text-transparent"
							>
								projects
							</Link>
						</h3>

						<div className="no-scrollbar overflow-y-scroll rounded-xl-to-2xl">
							<Link to="projects">
								{/* projects/web-dev */}
								<ProjectsContentBox
									name={'Web Development'}
									description={'2019-present'}
									innerBoxClass="	bg-light-green-radial-gradient"
								/>
							</Link>
							<Link to="projects">
								{/* projects/streetwear */}
								<ProjectsContentBox
									name={'Street-Wear Designs'}
									description={'2022-present'}
									innerBoxClass="	bg-light-green-radial-gradient"
								/>
							</Link>
							<Link to="projects">
								{/* projects/nft-collection */}
								<ProjectsContentBox
									name={'NFT Collection'}
									// NFT Collection (unreleased)
									description={'2022-present'}
									innerBoxClass="	bg-light-green-radial-gradient"
								/>
							</Link>
							<Link to="projects">
								{/* projects/nft-game */}
								<ProjectsContentBox
									name={'Web3 NFT Online Game'}
									description={'2023-present'}
									innerBoxClass="	bg-light-green-radial-gradient"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Welcome To Wochlife' }]

function PortfolioContentBox({
	name,
	description,
	boxClass,
	innerBoxClass,
	imgSrc,
}: {
	name: string
	description: string
	boxClass?: string
	innerBoxClass?: string
	imgSrc?: string
}) {
	return (
		<div className={cn(darkBoxInnerContentBox, boxClass)}>
			<div
				className={cn(
					boxInnerContentBoxInnerBox,
					innerBoxClass,
					'flex items-center justify-center',
				)}
			>
				{!!imgSrc && imgSrc.length && (
					<img src={imgSrc} alt="" className="max-w-2/3 rounded-md" />
				)}
			</div>
			<div className="ml-6 flex max-w-[67%] flex-col">
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}
function ProjectsContentBox({
	name,
	description,
	innerBoxClass,
	imgSrc,
}: {
	name: string
	description: string
	innerBoxClass?: string
	imgSrc?: string
}) {
	return (
		<div className={purpleBoxInnerContentBox}>
			<div className={cn(boxInnerContentBoxInnerBox, innerBoxClass)}>
				{!!imgSrc && imgSrc.length && <img src={imgSrc} alt="" />}
			</div>
			<div className="ml-6 flex max-w-[67%] flex-col">
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}
