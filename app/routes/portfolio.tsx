import { type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

//* global styling classes
// 2. boxes
const boxInnerContentBoxInnerBox =
	'custom-box-in-box-in-box-sizes rounded-lg-to-xl bg-cover bg-contain'
const bigBoxTitle = 'capitalize text-center text-2xl font-semibold mb-6'

const boxInnerContentBoxProps =
	'custom-box-in-box-sizes flex items-center mb-3 4xl:mb-4'
const darkBoxInnerContentBox =
	boxInnerContentBoxProps +
	' bg-foreground/10 hover:bg-foreground hover:text-background cursor-pointer transition-colors duration-500 p-2 rounded-xl'

export default function PortfolioRoute() {
	//* styling classes
	// 1. grid, responsivness
	const col1 =
		'md-to-lg:w-[35%] lg:w-[32%] lg-to-xl:w-[29%] xl:w-[26.502%] max-w-[460px]'
	const col2 =
		'w-full md-to-lg:w-[65%] lg:w-[68%] lg-to-xl:w-[71%] xl:w-[73.498%] flex flex-col'

	// 2. boxes
	const boxProps =
		'flex flex-col rounded-3xl lg:rounded-6xl pt-4 px-4 md:px-5 md:pt-6'
	const darkBoxBgClassList = boxProps + ' bg-dark-box-gradient'

	//* copy translations

	return (
		<div className="max-md-to-lg:flex-col mx-auto flex gap-8 max-xl:px-4 md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]">
			<div className={col1}>
				<div className={darkBoxBgClassList}>
					<h3 className={bigBoxTitle}>portfolio</h3>

					<h5 className="mb-3 text-center text-lg capitalize">
						<NavLink
							to="freelance"
							className={({ isActive }: { isActive: boolean }) =>
								isActive
									? 'text-highlight'
									: 'transition-colors hover:text-highlight'
							}
						>
							freelance
						</NavLink>
					</h5>
					<div className="no-scrollbar custom-portfolio-sections-height overflow-scroll rounded-xl-to-2xl">
						<NavLink to="freelance">
							{({ isActive }) => (
								<PortfolioContentBox
									// boxClass={isActive ? 'bg-foreground text-background' : ''}
									name={'coming soon..'}
									description={'2020, Code'}
									innerBoxClass="bg-light-green-radial-gradient"
								/>
							)}
						</NavLink>
						<NavLink to="freelance">
							{({ isActive }) => (
								<PortfolioContentBox
									// boxClass={isActive ? 'bg-foreground text-background' : ''}
									name={'coming soon..'}
									description={'2019, Design + Code'}
									innerBoxClass="bg-light-green-radial-gradient"
								/>
							)}
						</NavLink>
						<NavLink to="freelance">
							{({ isActive }) => (
								<PortfolioContentBox
									// boxClass={isActive ? 'bg-foreground text-background' : ''}
									name={'coming soon..'}
									description={'2019, Design + Code'}
									innerBoxClass="bg-light-green-radial-gradient"
								/>
							)}
						</NavLink>
						<NavLink to="freelance">
							{({ isActive }) => (
								<PortfolioContentBox
									// boxClass={isActive ? 'bg-foreground text-background' : ''}
									boxClass="mb-0"
									name={'coming soon..'}
									description={'2019, Code -1st project'}
									innerBoxClass="bg-light-green-radial-gradient"
								/>
							)}
						</NavLink>
					</div>

					<h5 className="mb-3 mt-6 text-center text-lg capitalize">
						<NavLink
							to="forcompanies"
							className={({ isActive }: { isActive: boolean }) =>
								isActive
									? 'text-highlight'
									: 'transition-colors hover:text-highlight'
							}
						>
							for companies
						</NavLink>
					</h5>
					<div className="no-scrollbar custom-portfolio-sections-height overflow-scroll rounded-xl-to-2xl">
						<NavLink to="forcompanies/medi">
							{({ isActive }) => (
								<PortfolioContentBox
									boxClass={isActive ? 'bg-foreground text-background' : ''}
									innerBoxClass="bg-medi-radial-gradient"
									imgSrc="/img/medi.webp"
									name="medi.de/cz"
									description="2020-2022"
								/>
							)}
						</NavLink>
						<NavLink to="forcompanies/t4s">
							{({ isActive }) => (
								<PortfolioContentBox
									boxClass={isActive ? 'bg-foreground text-background' : ''}
									innerBoxClass="bg-t4s-radial-gradient"
									imgSrc="/img/t4s.webp"
									name="top4sport.com"
									description="2022-present"
								/>
							)}
						</NavLink>
						<NavLink to="forcompanies/11ts">
							{({ isActive }) => (
								<PortfolioContentBox
									boxClass={isActive ? 'bg-foreground text-background' : ''}
									innerBoxClass="bg-11ts-radial-gradient"
									imgSrc="/img/11ts.webp"
									name="11teamsports.com"
									description="2022-present"
								/>
							)}
						</NavLink>
					</div>
				</div>
			</div>

			<div className={col2}>
				<div className={darkBoxBgClassList}>
					<Outlet />
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
			<div className="ml-6 flex max-w-[67%] flex-col">
				<p className="whitespace-nowrap">{name}</p>
				<p className="no-scrollbar overflow-scroll whitespace-nowrap">
					{description}
				</p>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Wochlife - Portfolio' }]
