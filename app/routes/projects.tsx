import { type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'
import {
	bigBoxTitle,
	boxInnerContentBoxInnerBox,
	darkBoxBgClassList,
	innerContentBoxTexts,
	purpleBoxBgClassList,
	purpleBoxInnerContentBox,
} from '#app/components/classlists.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

export default function ProjectsRoute() {
	//* styling classes
	// 1. grid, responsivness
	const col1 =
		'md-to-lg:w-[35%] lg:w-[32%] lg-to-xl:w-[29%] xl:w-[26.502%] max-w-[460px]'
	const col2 =
		'w-full md-to-lg:w-[65%] lg:w-[68%] lg-to-xl:w-[71%] xl:w-[73.498%] flex flex-col'

	return (
		<div className="mx-auto flex gap-8 max-xl:px-4 max-md-to-lg:flex-col md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]">
			<div className={col1}>
				<div className={purpleBoxBgClassList}>
					<h3 className={bigBoxTitle}>projects</h3>

					<div className="no-scrollbar pb-4 overflow-y-scroll rounded-xl-to-2xl">
						<NavLink to="web-dev">
							{({ isActive }) => (
								<ProjectsContentBox
									// boxClass={isActive ? 'bg-foreground text-background' : ''}
									name={'Web Development'}
									description={'2019-present'}
									innerBoxClass="	bg-light-green-radial-gradient"
								/>
							)}
						</NavLink>
						<NavLink to="streetwear">
							{({ isActive }) => (
								<ProjectsContentBox
									// boxClass={isActive ? 'bg-foreground text-background' : ''}
									name={'Street-Wear Designs'}
									description={'2022-present'}
									innerBoxClass="	bg-light-green-radial-gradient"
								/>
							)}
						</NavLink>
						<NavLink to="nfts">
							{({ isActive }) => (
								<ProjectsContentBox
									// boxClass={isActive ? 'bg-foreground text-background' : ''}
									name={'NFT Collection (unreleased)'}
									description={'2022-present'}
									innerBoxClass="	bg-light-green-radial-gradient"
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
			<div className="ml-6 flex max-w-[67%] flex-col">
				<p className={innerContentBoxTexts}>{name}</p>
				<p className={innerContentBoxTexts}>{description}</p>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Wochlife - Projects' }]
