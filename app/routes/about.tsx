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
	innerContentBoxWrapperOfBoxesInBox2,
	mobContentsRouteSelectorCol1,
} from '#app/components/classlists.tsx'
import {
	MobileModalCaretOpener,
	ModalCloserIcon,
} from '#app/components/modal-helpers.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { cn } from '#app/utils/misc.tsx'

export default function AboutRoute() {
	const [isMobExtraMenuToggled, setMobExtraMenuToggled] = useState(false)
	const handleToggle = () => {
		setMobExtraMenuToggled(prev => !prev)
	}

	return (
		<div className={contentsRouteWrapper}>
			<div className="duration-300 md-to-lg:hidden">
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
			/>

			<div className={cn('delayed-fade-in-200', contentsRouteContentCol2)}>
				<div className={darkContentBoxBgClassList}>
					<h4 className="mb-6 text-lg md-to-lg:hidden font-semibold text-center capitalize md:text-xl">
						Discover More About
					</h4>

					<div className="pb-2 flex gap-3 max-xl:flex-wrap md-to-lg:hidden justify-center">
						<NavLink to="filip">
							{({ isActive }) => (
								<Button variant={isActive ? 'highlight' : 'default'}>
									Filip
								</Button>
							)}
						</NavLink>

						<NavLink to="wochlife">
							{({ isActive }) => (
								<Button variant={isActive ? 'highlight' : 'default'}>
									Wochlife
								</Button>
							)}
						</NavLink>
					</div>

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
			<div className={cn('delayed-fade-in-100', darkBoxBgClassList)}>
				{handleToggle && <ModalCloserIcon handleToggle={handleClick} />}

				<h3 className={bigBoxTitle}>about</h3>

				<div className={innerContentBoxWrapperOfBoxesInBox2}>
					<NavLink to="filip" onClick={handleClick}>
						{({ isActive }) => (
							<AboutContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'Filip'}
								description={'Dev since 2019'}
								innerBoxClass="bg-purple-box-gradient"
							/>
						)}
					</NavLink>

					<NavLink to="wochlife" onClick={handleClick}>
						{({ isActive }) => (
							<AboutContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								imgSrc='/favicons/favicon-32x32.png'
								name={'Wochlife'}
								description={'since 2022'}
								innerBoxClass="bg-background"
							/>
						)}
					</NavLink>
				</div>
			</div>
		</div>
	)
}

function AboutContentBox({
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
					<img src={imgSrc} alt="" className="rounded-md" width="75%" height="75%" />
				)}
			</div>
			<div className={contentRouteSelectorContentBoxes}>
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Wochlife - About' }]
