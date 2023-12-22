import { type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'
import { useState } from 'react'
import {
	bigBoxTitle,
	boxInnerContentBoxInnerBox,
	contentRouteSelectorContentBoxes,
	contentsRouteContentCol2,
	contentsRouteSelectorCol1,
	contentsRouteWrapper,
	darkBoxBgClassList,
	darkBoxInnerContentBox,
	innerContentBoxTexts,
	innerContentBoxWrapperOfBoxesInBox,
} from '#app/components/classlists.tsx'
import { MobileModalCaretOpener } from '#app/components/modal-helpers.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

export default function PortfolioRoute() {
	const [isMobExtraMenuToggled, setMobExtraMenuToggled] = useState(false)
	const handleToggle = () => {
		setMobExtraMenuToggled(prev => !prev)
	}

	return (
		<div className={contentsRouteWrapper}>
			<div className="md-to-lg:hidden">
				<MobileModalCaretOpener
					isMobExtraMenuToggled={isMobExtraMenuToggled}
					handleToggle={handleToggle}
				/>

				<RouteSelector
					classList={cn(
						isMobExtraMenuToggled ? 'opacity-100' : 'opacity-0 pointer-events-none', // pointer-events-none to make this opacity-0 component non-interactive
						contentsRouteSelectorCol1,
						'transition-opacity duration-500 fixed bottom-20 z-1999 max-md:left-5 md:right-16',
					)}
					handleToggle={handleToggle}
				/>
			</div>

			<RouteSelector classList={cn(contentsRouteSelectorCol1, 'max-md-to-lg:hidden')} />

			<div className={contentsRouteContentCol2}>
				<div className={darkBoxBgClassList}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

function RouteSelector({
	classList,
	handleToggle,
}: {
	classList: string
	handleToggle?: () => void
}) {
	const handleClick = () => {
		handleToggle && handleToggle()
	}

	return (
		<div className={classList}>
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
						onClick={handleClick}
					>
						freelance
					</NavLink>
				</h5>
				<div className={innerContentBoxWrapperOfBoxesInBox}>
					<NavLink to="freelance" onClick={handleClick}>
						{({ isActive }) => (
							<PortfolioContentBox
								// boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'coming soon..'}
								description={'2020, Code'}
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						)}
					</NavLink>
					<NavLink to="freelance" onClick={handleClick}>
						{({ isActive }) => (
							<PortfolioContentBox
								// boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'coming soon..'}
								description={'2019, Design + Code'}
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						)}
					</NavLink>
					<NavLink to="freelance" onClick={handleClick}>
						{({ isActive }) => (
							<PortfolioContentBox
								// boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'coming soon..'}
								description={'2019, Design + Code'}
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						)}
					</NavLink>
					<NavLink to="freelance" onClick={handleClick}>
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
						onClick={handleClick}
					>
						for companies
					</NavLink>
				</h5>
				<div className="no-scrollbar custom-content-sections-height overflow-scroll rounded-xl-to-2xl">
					<NavLink to="forcompanies/medi" onClick={handleClick}>
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
					<NavLink to="forcompanies/t4s" onClick={handleClick}>
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
					<NavLink to="forcompanies/11ts" onClick={handleClick}>
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
			<div className={contentRouteSelectorContentBoxes}>
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Wochlife - Portfolio' }]
