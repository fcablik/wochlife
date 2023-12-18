import { type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
// import { LogoWochlife, LogoPhil } from '#app/components/logos.tsx'
import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'
import { cn } from '#app/utils/misc.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

export default function Index() {
	// 	{<div className="mb-4">
	// 	<LogoWochlife className="max-w-full px-8" />
	// 	<LogoPhil className="max-w-full px-8" />
	// </div>

	const lightBoxInnerContentBox = 'mb-5 bg-white/80 text-black py-4 rounded-lg'
	const darkBoxInnerContentBox = 'mb-5 bg-black/80 py-4 rounded-lg'
	const bigBoxTitleProps = 'text-xl mb-8'
	const boxProps = 'flex flex-col justify-between pt-6 px-5'
	const darkBoxBgClassList =
		'bg-dark-box-gradient rounded-4xl pt-6 px-5 ' + boxProps
	const purpleBoxBgClassList = 'bg-purple-box-gradient rounded-4xl ' + boxProps
	const purpleBoxBgClassListSm =
		purpleBoxBgClassList + ' pb-5 w-1/2 min-h-[165px] md:h-[205px] 4xl:h-[215px]'

	return (
		<div className="max-lg-to-xl-3:flex-col mx-auto flex gap-8 max-xl:px-4 md:max-xl:mx-8 xl:max-w-[1300px] 4xl:max-w-[1400px]">
			<div className="lg-to-xl-3:w-[37%] w-full">
				<h1 className="text-4xl lg:text-h1 mt-12 opacity-90">
					Welcome
					<br />
					to Wochlife
				</h1>
				<h2 className="mt-2 text-2xl capitalize opacity-80">the phil's little world</h2>

				<div className={cn(darkBoxBgClassList, 'custom-max-margin-welcome-box relative p-10')}>
					<div className="max-w-[85%] md:max-w-[70%] opacity-90">
						Hey, I’m Phil.
						<br />
						<br />
						Web Developer with passion for combining tech& design.
						<br />
						<br />I take advantage of my tech knowledge and implement creativity
						to get the ultimate art form of an application.
					</div>

					<div className="-transform-y-1/2 absolute right-0 top-1/2">woch</div>
				</div>
			</div>

			<div
				className={cn(
					darkBoxBgClassList,
					'custom-max-heights lg-to-xl-3:w-[28%] flex w-full flex-col justify-between text-center',
				)}
			>
				<h3 className={bigBoxTitleProps}>Portfolio</h3>

				<div className="overflow-scroll rounded-b-xl no-scrollbar">
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
					<div className={darkBoxInnerContentBox}>content</div>
				</div>
			</div>

			<div className='custom-max-heights lg-to-xl-3:w-[35%] w-full text-center'>
				<div className="flex w-full gap-5">
					<div className={purpleBoxBgClassListSm}>
						<h3 className="text-xl font-semibold">About</h3>
						logo
						<Link to="about">
							<Button className="w-full" variant="secondary">Discover</Button>
						</Link>
					</div>

					<div className={purpleBoxBgClassListSm}>
						<h3 className="text-xl font-semibold">About</h3>
						logo
						<Link to="about">
							<Button className="w-full" variant="secondary">Discover</Button>
						</Link>
					</div>
				</div>

				<div className={cn(purpleBoxBgClassList, 'custom-max-margin-projects max-h-[298px]')}>
					<h3 className={bigBoxTitleProps}>Projects</h3>

					<div className="overflow-scroll rounded-b-xl no-scrollbar">
						<div className={lightBoxInnerContentBox}>content</div>
						<div className={lightBoxInnerContentBox}>content</div>
						<div className={lightBoxInnerContentBox}>content</div>
						<div className={lightBoxInnerContentBox}>content</div>
						<div className={lightBoxInnerContentBox}>content</div>
						<div className={lightBoxInnerContentBox}>content</div>
						<div className={lightBoxInnerContentBox}>content</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Welcome To Wochlife' }]
