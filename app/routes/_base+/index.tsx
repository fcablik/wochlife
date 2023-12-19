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

export default function Index() {
	//* styling classes
	// 1. grid, responsivness
	const col1 = 'w-full lg:w-[75%] lg-to-xl-3:w-[40%]'
	const col2 = 'custom-max-heights w-full lg:w-1/2 lg-to-xl-3:w-[44.17%]'
	const col3 = 'custom-max-heights w-full lg:w-1/2 lg-to-xl-3:w-[55.83%]'

	// 2. boxes
	const boxInnerContentBoxInnerBox =
		'w-[60px] h-[60px] rounded-lg bg-light-green-radial-gradient'
	const lightBoxInnerContentBox =
		'flex items-center xl:min-h-[70px] mb-5 bg-highlight-dark/30 hover:bg-highlight-dark transition-colors duration-500 p-2 cursor-pointer rounded-xl'
	const darkBoxInnerContentBox =
		'flex items-center xl:min-h-[70px] mb-5 bg-foreground/10 hover:bg-foreground hover:text-background cursor-pointer transition-colors duration-500 p-2 rounded-xl'
	const bigBoxTitleProps = 'capitalize text-center text-2xl font-semibold mb-6'
	const boxProps = 'flex flex-col'
	const darkBoxBgClassList =
		'bg-dark-box-gradient rounded-3xl lg:rounded-6xl pt-6 px-5 ' + boxProps
	const purpleBoxBgClassList = 'bg-purple-box-gradient rounded-3xl lg:rounded-6xl ' + boxProps
	const purpleBoxBgClassListSm =
		purpleBoxBgClassList +
		' pt-4 md:pt-6 px-2 md:px-5 justify-between items-center pb-5 w-1/2 min-h-[175px] lg:h-[225px] lg-to-xl:h-[245px] 2xl:h-[195px] 4xl:h-[215px]'


	//* copy translations
	const welcomeTitle = 'Welcome <br /> to Wochlife'
	const welcomeSubTitle = "the phil's little world"
	const welcomeBoxText =
		"Hey, I'm Phil.<br /><br />Web Apps Developer with passion for combining tech & design.<br /><br />I take advantage of my tech knowledge and implement creativity to get the ultimate art form of an application."
	const aboutText = 'about'

	return (
		<div className="mx-auto flex gap-8 max-xl:px-4 max-lg-to-xl-3:flex-col md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]">
			<div className={col1}>
				<h1 className="mt-8 text-h1-sm opacity-90 lg:text-h1-md 2xl:text-h1">
					<span dangerouslySetInnerHTML={{ __html: welcomeTitle }} />
				</h1>
				<h2 className="mt-2 text-xl-to-2xl capitalize opacity-80">
					{welcomeSubTitle}
				</h2>

				<div
					className={cn(
						darkBoxBgClassList,
						'custom-max-margin-welcome-box relative p-6 lg:p-10',
					)}
				>
					<div className="max-w-[87%] opacity-90 md:max-w-[80%] 2xl:text-md-to-lg">
						<span dangerouslySetInnerHTML={{ __html: welcomeBoxText }} />
					</div>

					<div className="overflow-x-hidden max-lg-to-xl-3:scale-x-flip absolute right-0 md:right-[-3.5em] xl:right-[-5em] 2xl:right-[-4em] top-[-8em] sm:top-[-10em] lg:top-[-9em] xl:top-[-4.75em] 2xl:top-[-2em] max-md:overflow-x-hidden">
						<img src="/img/woch_testing_4.png" alt="" />
					</div>
				</div>
			</div>
<div className='flex max-lg:flex-col w-full lg-to-xl-3:w-3/5 gap-8'>


			<div className={cn(darkBoxBgClassList, col2)}>
				<h3 className={bigBoxTitleProps}>portfolio</h3>

				<div className="no-scrollbar overflow-scroll rounded-b-xl">
					<PortfolioContentBox
						darkBoxInnerContentBox={darkBoxInnerContentBox}
						boxInnerContentBoxInnerBox={boxInnerContentBoxInnerBox}
						name={'content'}
						description={'description'}
					/>
					<PortfolioContentBox
						darkBoxInnerContentBox={darkBoxInnerContentBox}
						boxInnerContentBoxInnerBox={boxInnerContentBoxInnerBox}
						name={'content'}
						description={'description'}
					/>
					<PortfolioContentBox
						darkBoxInnerContentBox={darkBoxInnerContentBox}
						boxInnerContentBoxInnerBox={boxInnerContentBoxInnerBox}
						name={'content'}
						description={'description'}
					/>
					<PortfolioContentBox
						darkBoxInnerContentBox={darkBoxInnerContentBox}
						boxInnerContentBoxInnerBox={boxInnerContentBoxInnerBox}
						name={'content'}
						description={'description'}
					/>
				</div>
			</div>

			<div className={col3}>
				<div className="flex w-full gap-5">
					<div className={purpleBoxBgClassListSm}>
						<h3 className="text-xl font-semibold capitalize">{aboutText}</h3>

						<LogoPhil className='max-md:max-h-[24px]' />

						<Link to="about/phil" className="w-full">
							<Button className="text-md w-full capitalize" variant="default">
								discover
							</Button>
						</Link>
					</div>

					<div className={purpleBoxBgClassListSm}>
						<h3 className="text-xl font-semibold capitalize">{aboutText}</h3>

						<LogoWochlife className='max-md:max-h-[20px]' />

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
						'pt-6 px-5 custom-max-margin-projects h-full max-h-[298px]',
					)}
				>
					<h3 className={bigBoxTitleProps}>projects</h3>

					<div className="no-scrollbar overflow-scroll rounded-b-xl">
						<ProjectsContentBox
							lightBoxInnerContentBox={lightBoxInnerContentBox}
							boxInnerContentBoxInnerBox={boxInnerContentBoxInnerBox}
							name={'content'}
							description={'description'}
						/>
						<ProjectsContentBox
							lightBoxInnerContentBox={lightBoxInnerContentBox}
							boxInnerContentBoxInnerBox={boxInnerContentBoxInnerBox}
							name={'content'}
							description={'description'}
						/>
						<ProjectsContentBox
							lightBoxInnerContentBox={lightBoxInnerContentBox}
							boxInnerContentBoxInnerBox={boxInnerContentBoxInnerBox}
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
	darkBoxInnerContentBox,
	boxInnerContentBoxInnerBox,
	name,
	description,
}: {
	darkBoxInnerContentBox: string
	boxInnerContentBoxInnerBox: string
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
	lightBoxInnerContentBox,
	boxInnerContentBoxInnerBox,
	name,
	description,
}: {
	lightBoxInnerContentBox: string
	boxInnerContentBoxInnerBox: string
	name: string
	description: string
}) {
	return (
		<div className={lightBoxInnerContentBox}>
			<div className={boxInnerContentBoxInnerBox} />
			<div className="mx-6 flex flex-col">
				<p>{name}</p>
				<p>{description}</p>
			</div>
		</div>
	)
}
