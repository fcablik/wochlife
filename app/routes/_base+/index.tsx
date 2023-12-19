import { type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
// import { LogoWochlife, LogoPhil } from '#app/components/logos.tsx'
import { Link } from '@remix-run/react'
import { LogoPhil, LogoWochlife } from '#app/components/logos.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

//* global styling classes
// 2. boxes
const boxInnerContentBoxInnerBox =
	'custom-box-in-box-in-box-sizes rounded-lg-to-xl bg-light-green-radial-gradient'
const bigBoxTitle = 'capitalize text-center text-2xl font-semibold mb-6'

const boxInnerContentBoxProps =
	'custom-box-in-box-sizes flex items-center mb-3 2xl:mb-4 4xl:mb-5'
const purpleBoxInnerContentBox =
	boxInnerContentBoxProps +
	' bg-highlight-dark/30 hover:bg-highlight-dark transition-colors duration-500 p-2 cursor-pointer rounded-xl'
const darkBoxInnerContentBox =
	boxInnerContentBoxProps +
	' bg-foreground/10 hover:bg-foreground hover:text-background cursor-pointer transition-colors duration-500 p-2 rounded-xl'

export default function Index() {
	//* styling classes
	// 1. grid, responsivness
	const col1 = 'w-full lg:w-[75%] lg-to-xl-3:w-[40%] flex flex-col justify-end'
	const col2 = 'custom-max-heights w-full lg:w-1/2 lg-to-xl-3:w-[44.17%]'
	const col3 =
		'custom-max-heights w-full lg:w-1/2 lg-to-xl-3:w-[55.83%] flex flex-col justify-between'

	// 2. boxes
	const boxProps =
		'flex flex-col rounded-3xl lg:rounded-6xl pt-4 px-4 md:px-5 md:pt-6'
	const darkBoxBgClassList = boxProps + ' bg-dark-box-gradient'
	const purpleBoxBgClassList = boxProps + ' bg-purple-box-gradient'
	const purpleBoxBgClassListSm =
		boxProps +
		' bg-purple-box-gradient justify-between items-center pb-5 w-1/2 min-h-[175px] lg:h-[225px] lg-to-xl:h-[185px] 2xl:h-[195px] 4xl:h-[215px]'

	//* copy translations
	const welcomeTitle = 'Welcome <br /> to Wochlife'
	const welcomeSubTitle = "the phil's little world"
	const welcomeBoxText =
		"<p class='mb-3 md:mb-5'>Hey, I'm Phil.</p><p class='mb-3 md:mb-5'>Web Developer with<br class='sm:hidden'/> passion for combining tech<br class='sm:hidden'/>&&nbsp;design.</p>I take advantage of my tech knowledge and implement creativity to get the ultimate art form of an application."
	const aboutText = 'about'

	return (
		<div className="mx-auto flex gap-8 max-xl:px-4 max-lg-to-xl-3:flex-col md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]">
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
					<div className="2xl:text-md max-w-[90%] opacity-90 max-lg:text-[.8rem] md:max-w-[80%] 3xl:text-md-to-lg">
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

			<div className="flex w-full gap-8 max-lg:flex-col lg-to-xl-3:w-3/5">
				<div className={cn(darkBoxBgClassList, col2, 'max-lg:max-h-[298px]')}>
					<h3 className={bigBoxTitle}>portfolio</h3>

					<div className="no-scrollbar rounded-xl-to-2xl overflow-scroll">
						<PortfolioContentBox name={'content'} description={'description'} />
						<PortfolioContentBox name={'content'} description={'description'} />
						<PortfolioContentBox name={'content'} description={'description'} />
						<PortfolioContentBox name={'content'} description={'description'} />
						<PortfolioContentBox name={'content'} description={'description'} />
						<PortfolioContentBox name={'content'} description={'description'} />
						<PortfolioContentBox name={'content'} description={'description'} />
					</div>
				</div>

				<div className={col3}>
					<div className="flex w-full gap-5">
						<div className={purpleBoxBgClassListSm}>
							<h3 className="text-xl font-semibold capitalize">{aboutText}</h3>

							<LogoPhil className="max-md:max-h-[24px]" />

							<Link to="about/phil" className="w-full">
								<Button className="text-md w-full capitalize" variant="default">
									discover
								</Button>
							</Link>
						</div>

						<div className={purpleBoxBgClassListSm}>
							<h3 className="text-xl font-semibold capitalize">{aboutText}</h3>

							<LogoWochlife className="max-md:max-h-[20px]" />

							<Link to="about/wochlife" className="w-full">
								<Button className="w-full capitalize" variant="default">
									discover
								</Button>
							</Link>
						</div>
					</div>

					<div
						className={cn(
							purpleBoxBgClassList,
							'h-full max-h-[298px] max-md:mt-6',
						)}
					>
						<h3 className={bigBoxTitle}>projects</h3>

						<div className="no-scrollbar rounded-xl-to-2xl overflow-scroll">
							<ProjectsContentBox
								name={'content'}
								description={'description'}
							/>
							<ProjectsContentBox
								name={'content'}
								description={'description'}
							/>
							<ProjectsContentBox
								name={'content'}
								description={'description'}
							/>
							<ProjectsContentBox
								name={'content'}
								description={'description'}
							/>
							<ProjectsContentBox
								name={'content'}
								description={'description'}
							/>
							<ProjectsContentBox
								name={'content'}
								description={'description'}
							/>
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
}: {
	name: string
	description: string
}) {
	return (
		<div className={darkBoxInnerContentBox}>
			<div className={boxInnerContentBoxInnerBox} />
			<div className="mx-6 flex flex-col">
				<p>{name}</p>
				<p>{description}</p>
			</div>
		</div>
	)
}
function ProjectsContentBox({
	name,
	description,
}: {
	name: string
	description: string
}) {
	return (
		<div className={purpleBoxInnerContentBox}>
			<div className={boxInnerContentBoxInnerBox} />
			<div className="mx-6 flex flex-col">
				<p>{name}</p>
				<p>{description}</p>
			</div>
		</div>
	)
}
