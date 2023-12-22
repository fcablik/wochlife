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
	innerContentBoxTexts,
	innerContentBoxWrapperOfBoxesInBox2,
	mobContentsRouteSelectorCol1,
	purpleBoxBgClassList,
	purpleBoxInnerContentBox,
} from '#app/components/classlists.tsx'
import { MobileModalCaretOpener } from '#app/components/modal-helpers.tsx'
import { Icon } from '#app/components/ui/icon.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

export default function ProjectsRoute() {
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
	const lightGreenGradient = 'bg-light-green-radial-gradient'

	return (
		<div className={classList}>
			<div className={purpleBoxBgClassList}>
				<Icon
					name="cross-1"
					size="md"
					className="absolute right-6 top-6 z-2000 text-white"
					onClick={handleClick}
				/>

				<h3 className={bigBoxTitle}>projects</h3>

				<div className={innerContentBoxWrapperOfBoxesInBox2}>
					<NavLink to="web-dev" onClick={handleClick}>
						{({ isActive }) => (
							<ProjectsContentBox
								// boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'Web Development'}
								description={'2019-present'}
								innerBoxClass={lightGreenGradient}
							/>
						)}
					</NavLink>

					<NavLink to="streetwear" onClick={handleClick}>
						{({ isActive }) => (
							<ProjectsContentBox
								// boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'Street-Wear Designs'}
								description={'2022-present'}
								innerBoxClass={lightGreenGradient}
							/>
						)}
					</NavLink>

					<NavLink to="nfts" onClick={handleClick}>
						{({ isActive }) => (
							<ProjectsContentBox
								// boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'NFT Collection (unreleased)'}
								description={'2022-present'}
								innerBoxClass={lightGreenGradient}
							/>
						)}
					</NavLink>

					<NavLink to="web3-nft-game" onClick={handleClick}>
						{({ isActive }) => (
							<ProjectsContentBox
								// boxClass={isActive ? 'bg-foreground text-background' : ''}
								name={'Web3 NFT Online Game'}
								description={'2023-present'}
								innerBoxClass={lightGreenGradient}
							/>
						)}
					</NavLink>
				</div>
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
}: {
	name: string
	description: string
	boxClass?: string
	innerBoxClass?: string
	imgSrc?: string
}) {
	return (
		<div className={cn(purpleBoxInnerContentBox, boxClass)}>
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

export const meta: MetaFunction = () => [{ title: 'Wochlife - Projects' }]
