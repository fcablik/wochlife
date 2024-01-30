import { type MetaFunction } from '@remix-run/node'
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
	darkContentBoxBgClassList,
	innerContentBoxTexts,
	innerContentBoxWrapperOfBoxesInBox,
	mobContentsRouteSelectorCol1,
} from '#app/components/classlists.tsx'
import {
	MobileModalCaretOpener,
	ModalCloserIcon,
} from '#app/components/modal-helpers.tsx'
import { cn } from '#app/utils/misc.tsx'

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
					triggerTitle="menu"
				/>

				<RouteSelector
					classList={cn(
						isMobExtraMenuToggled
							? 'opacity-100'
							: 'opacity-0 pointer-events-none', // pointer-events-none to make this opacity-0 component non-interactive
						mobContentsRouteSelectorCol1,
					)}
					handleToggle={handleToggle}
				/>
			</div>

			<RouteSelector
				classList={cn(contentsRouteSelectorCol1, 'max-md-to-lg:hidden')}
				innerClassList="custom-route-selector-content-sections-height"
			/>

			<div className={cn('delayed-fade-in-200', contentsRouteContentCol2)}>
				<div className={darkContentBoxBgClassList}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

function RouteSelector({
	classList,
	innerClassList,
	handleToggle,
}: {
	classList: string
	innerClassList?: string
	handleToggle?: () => void
}) {
	const handleClick = () => {
		handleToggle && handleToggle()
	}

	return (
		<div className={classList}>
			<div
				className={cn(
					'delayed-fade-in-100 custom-content-route-selector-height',
					darkBoxBgClassList,
				)}
			>
				{handleToggle && <ModalCloserIcon handleToggle={handleClick} />}
				<h3 className={bigBoxTitle}>dev portfolio</h3>

				<h5 className="mb-3 text-center text-lg capitalize">
					<div
					// to="freelance"
					// className={({ isActive }: { isActive: boolean }) =>
					// 	isActive
					// 		? 'text-highlight'
					// 		: 'transition-colors hover:text-highlight'
					// }
					// onClick={handleClick}
					>
						freelance
					</div>
				</h5>
				<div className={cn(innerContentBoxWrapperOfBoxesInBox, innerClassList)}>
					<NavLink to="freelance/remix-ts" onClick={handleClick}>
						{({ isActive }) => (
							<PortfolioContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'Remix.run / Typescript / TailwindCSS'}
								description={'since 2022'}
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						)}
					</NavLink>

					<NavLink to="freelance/reactjs" onClick={handleClick}>
						{({ isActive }) => (
							<PortfolioContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'React JS / Sass'}
								description={'since 2021'}
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						)}
					</NavLink>

					<NavLink to="freelance/wp-php-js" onClick={handleClick}>
						{({ isActive }) => (
							<PortfolioContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'WordPress / PHP / JS'}
								description={'since 2019'}
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						)}
					</NavLink>
				</div>

				<h5 className="mb-3 mt-6 text-center text-lg capitalize">
					<div
						// to="forcompanies"
						// className={({ isActive }: { isActive: boolean }) =>
						// 	isActive
						// 		? 'text-highlight'
						// 		: 'transition-colors hover:text-highlight'
						// }
						onClick={handleClick}
					>
						for companies
					</div>
				</h5>
				<div className={cn(innerContentBoxWrapperOfBoxesInBox, innerClassList)}>
					<NavLink to="forcompanies/11ts" onClick={handleClick}>
						{({ isActive }) => (
							<PortfolioContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								innerBoxClass="bg-11ts-radial-gradient"
								imgSrc="/img/11ts.webp"
								name="11teamsports.com"
								description="2023-present"
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
					<img
						src={imgSrc}
						alt=""
						className="rounded-md"
						width="75%"
						height="75%"
					/>
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
