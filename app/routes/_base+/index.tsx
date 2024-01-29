import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import {
	bigBoxTitle,
	boxInnerContentBoxInnerBox,
	boxProps,
	darkBoxBgClassList,
	darkBoxInnerContentBox,
	innerContentBoxTexts,
	innerContentBoxWrapperOfBoxesInBox,
	purpleBoxBgClassList,
	purpleBoxInnerContentBox,
} from '#app/components/classlists.tsx'
import {
	LogoPhil,
	// LogoWochlife
} from '#app/components/logos.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { Icon, type IconName } from '#app/components/ui/icon.tsx'
import { cn } from '#app/utils/misc.tsx'

export default function Index() {
	//* styling classes
	// 1. grid, responsivness
	const col1 = 'w-full lg:w-3/4 lg-to-xl-3:w-2/5 flex flex-col justify-end'
	const col2 = 'flex w-full gap-8 max-sm:flex-col lg-to-xl-3:w-3/5'
	const col2_col1 =
		'custom-max-heights w-full sm:w-1/2 lg-to-xl-3:w-[44.17%] max-sm:order-2'
	const col2_col2 =
		'custom-max-heights w-full sm:w-1/2 lg-to-xl-3:w-[55.83%] flex flex-col justify-between max-sm:order-1'

	const purpleBoxBgClassListSm =
		boxProps +
		' bg-purple-box-gradient justify-between items-center pb-5 w-1/2 min-h-[175px] md-to-lg:h-[210px] lg:h-[180px] xl:h-[185px] 2xl:h-[195px] 4xl:h-[215px]'
	const purpleBoxBgClassListSm2 =
		'text-center flex flex-col rounded-3xl lg:rounded-6xl pt-4 px-0 md:pt-6 bg-purple-box-gradient justify-between items-center pb-5 w-1/2 min-h-[175px] md-to-lg:h-[210px] lg:h-[180px] xl:h-[185px] 2xl:h-[195px] 4xl:h-[215px]'

	//* copy translations
	const welcomeTitle = 'Welcome <br /> to Wochlife'
	const welcomeSubTitle = "Fil's world of creations"
	const welcomeBoxText =
		"<p class='mb-3 md:mb-5'>Hey, I'm Filip.</p><p class='mb-3 md:mb-5'>Web Developer with<br class='sm:hidden'/> passion for combining tech <br class='sm:hidden'/>&&nbsp;design.</p>Applications are not just a&nbsp;product to me, it's a&nbsp;form of an&nbsp;art, an expression. My apps show the world, who You are."

	// "Applications are not just a product to me, it's a form of an art, an expression. My apps show the world who You are.

	const aboutText = 'about'
	const discoverText = 'discover'

	const lightGreenGradient = 'bg-light-green-radial-gradient'

	return (
		<div className="custom-hp-spacing mx-auto flex gap-8 max-xl:px-4 max-lg-to-xl-3:flex-col md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]">
			<div className={cn(col1, 'delayed-fade-in-200')}>
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
							className="delayed-fade-in-500 max-lg:max-w-[10rem]"
						/>
					</div>
				</div>
			</div>

			<div className={col2}>
				<div
					className={cn(darkBoxBgClassList, col2_col1, 'delayed-fade-in-200')}
				>
					<h3 className={bigBoxTitle}>portfolio</h3>

					<h5 className="mb-3 text-center text-lg capitalize">
						<div
							// to="portfolio/freelance"
							// className="transition-colors hover:text-highlight"
						>
							freelance
						</div>
					</h5>
					<div className={innerContentBoxWrapperOfBoxesInBox}>
						<Link to="portfolio/freelance/remix-ts" prefetch='intent'>
							<PortfolioContentBox
								name="Remix.run / Typescript / TailwindCSS"
								description="since 2022"
								innerBoxClass={lightGreenGradient}
							/>
						</Link>
						<Link to="portfolio/freelance/reactjs" prefetch='intent'>
							<PortfolioContentBox
								name="React JS / Sass"
								description="since 2021"
								innerBoxClass={lightGreenGradient}
							/>
						</Link>
						<Link to="portfolio/freelance/wp-php-js" prefetch='intent'>
							<PortfolioContentBox
								boxClass="mb-0 4xl:mb-0"
								name="WordPress / PHP / JS"
								description="since 2019"
								innerBoxClass={lightGreenGradient}
							/>
						</Link>
					</div>

					<h5 className="mb-3 mt-6 text-center text-lg capitalize">
						<div
							// to="portfolio/forcompanies"
							// className="transition-colors hover:text-highlight"
						>
							for companies
						</div>
					</h5>
					<div className={innerContentBoxWrapperOfBoxesInBox}>
						{/* <Link to="portfolio">
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
						</Link> */}
						<Link to="portfolio/forcompanies/11ts">
							<PortfolioContentBox
								innerBoxClass="bg-11ts-radial-gradient"
								imgSrc="/img/11ts.webp"
								name="11teamsports.com"
								description="2022-present"
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
						<Link to="portfolio/forcompanies/medi">
							<PortfolioContentBox
								innerBoxClass="bg-medi-radial-gradient"
								imgSrc="/img/medi.webp"
								name="medi.de/cz"
								description="2020-2022"
							/>
						</Link>
					</div>
				</div>

				<div className={col2_col2}>
					<div className="delayed-fade-in-300 flex w-full gap-5">
						<div className={purpleBoxBgClassListSm}>
							<h3 className="text-xl font-semibold capitalize">{aboutText}</h3>

							<LogoPhil className="max-lg:max-h-[24px]" />

							<Link to="about/phil" className="w-full">
								<Button
									className="w-full p-2 text-sm capitalize 2xl:text-md"
									variant="default"
								>
									{discoverText}
								</Button>
							</Link>
						</div>

						<div className={purpleBoxBgClassListSm2}>
							<h3 className="pt-6 text-md font-semibold capitalize md:pt-4 xg:pt-6 lg:text-lg 2xl:pt-6 4xl:pt-8">
								schedule <br />
								free call
							</h3>

							{/* <LogoWochlife className="max-md:max-h-[20px]" /> */}

							<Link to="contact" className="w-full px-4 md:px-5">
								<Button
									className="w-full p-2 text-sm capitalize 2xl:text-md"
									variant="default"
								>
									Contacts
								</Button>
							</Link>
						</div>
					</div>

					<div
						className={cn(
							purpleBoxBgClassList,
							'custom-projects-box-max-height delayed-fade-in-400 h-full pt-6 max-sm:mt-6', //pt-6 => "md:pt-6" is already in purpleBoxClassList
						)}
					>
						<h3 className={cn(bigBoxTitle, "text-xl transition-colors")}>
							my fields & projects
						</h3>

						<div className="no-scrollbar overflow-y-scroll rounded-xl-to-2xl">
							<Link to="projects/custom-apps">
								<ProjectsContentBox
									name={'Custom Web Applications'}
									description={'since 2019'}
									iconName="desktop"
									innerBoxClass={lightGreenGradient}
								/>
							</Link>
							<Link to="projects/booking-systems">
								<ProjectsContentBox
									name={'Webs /w Booking Systems'}
									description={'since 2022'}
									iconName="desktop"
									innerBoxClass={lightGreenGradient}
								/>
							</Link>
							<Link to="projects/online-stores">
								<ProjectsContentBox
									name={'Webs /w E-commerce'}
									description={'since 2020'}
									iconName="desktop"
									innerBoxClass={lightGreenGradient}
								/>
							</Link>

							<div className="mx-4 mb-3 border-b-2 border-highlight-dark/30 4xl:mb-4" />

							{/* <Link to="projects/streetwear"> */}
								<ProjectsContentBox
									boxClass="opacity-30 cursor-auto"
									name={'Street-Wear Designs'}
									// description={'2022-present'}
									description={'preview coming soon'}
									iconName="accessibility"
									innerBoxClass={lightGreenGradient}
								/>
							{/* </Link> */}

							{/* <Link to="projects/nft-collection"> */}
								<ProjectsContentBox
									boxClass="opacity-30 cursor-auto"
									name={'NFT Collection'}
									// description={'2022-present'}
									description={'preview coming soon'}
									iconName="rocket"
									innerBoxClass={lightGreenGradient}
								/>
							{/* </Link> */}

							{/* <Link to="projects/web3-nft-game"> */}
								<ProjectsContentBox
									boxClass="opacity-30 cursor-auto"
									name={'Web3 NFT Online Game'}
									// description={'2023-present'}
									description={'preview coming soon'}
									iconName="mix"
									innerBoxClass={lightGreenGradient}
								/>
							{/* </Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

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
			<div className="flex max-w-[67%] flex-col max-md-to-lg:ml-4 md-to-lg:ml-5">
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}

function ProjectsContentBox({
	name,
	description,
	boxClass,
	innerBoxClass,
	imgSrc,
	iconName,
}: {
	name: string
	description: string
	boxClass?: string
	innerBoxClass?: string
	imgSrc?: string
	iconName?: IconName
}) {
	return (
		<div className={cn(purpleBoxInnerContentBox, boxClass, 'group')}>
			<div
				className={cn(
					boxInnerContentBoxInnerBox,
					innerBoxClass,
					'text-highlight group-hover:text-foreground',
					'flex items-center justify-center transition-colors group-hover:bg-light-blue-radial-gradient',
				)}
			>
				{!iconName && !!imgSrc && imgSrc.length && <img src={imgSrc} alt="" />}
				{!!iconName && iconName.length && (
					<Icon name={iconName} size="xl" className="duration-200" />
				)}
			</div>
			<div className="flex max-w-[67%] flex-col max-md-to-lg:ml-4 md-to-lg:ml-5">
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Welcome To wochlife' }]
