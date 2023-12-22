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
	darkContentBoxBgClassList,
	innerContentBoxTexts,
	innerContentBoxWrapperOfBoxesInBox2,
	mobContentsRouteSelectorCol1,
} from '#app/components/classlists.tsx'
import { MobileModalCaretOpener, ModalCloserIcon } from '#app/components/modal-helpers.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

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

			<div className={contentsRouteContentCol2}>
				<div className={darkContentBoxBgClassList}>
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
				{handleToggle && <ModalCloserIcon handleToggle={handleClick} />}

				<h3 className={bigBoxTitle}>about</h3>

				<div className={innerContentBoxWrapperOfBoxesInBox2}>
					<NavLink to="phil" onClick={handleClick}>
						{({ isActive }) => (
							<AboutContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'Phil'}
								description={'2019-present'}
								innerBoxClass="bg-light-green-radial-gradient"
							/>
						)}
					</NavLink>

					<NavLink to="wochlife" onClick={handleClick}>
						{({ isActive }) => (
							<AboutContentBox
								boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'wochlife'}
								description={'2023'}
								innerBoxClass="bg-light-green-radial-gradient"
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

export const meta: MetaFunction = () => [{ title: 'Wochlife - About' }]
