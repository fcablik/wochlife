import { type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'
import {
	bigBoxTitle,
	boxInnerContentBoxInnerBox,
	darkBoxBgClassList,
	darkBoxInnerContentBox,
	innerContentBoxTexts,
} from '#app/components/classlists.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

export default function PortfolioRoute() {
	//* styling classes
	// 1. grid, responsivness
	const col1 =
		'md-to-lg:w-[35%] lg:w-[32%] lg-to-xl:w-[29%] xl:w-[26.502%] max-w-[460px]'
	const col2 =
		'w-full md-to-lg:w-[65%] lg:w-[68%] lg-to-xl:w-[71%] xl:w-[73.498%] flex flex-col'
	return (
		<div className="mx-auto flex gap-8 max-xl:px-4 max-md-to-lg:flex-col md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]">
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
					<div className="no-scrollbar custom-content-sections-height overflow-y-scroll rounded-xl-to-2xl">
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
					<div className="no-scrollbar custom-content-sections-height overflow-scroll rounded-xl-to-2xl">
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
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Wochlife - Portfolio' }]
