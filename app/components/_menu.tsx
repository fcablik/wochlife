import { NavLink } from '@remix-run/react'
import { cn } from '#app/utils/misc.tsx'
// import ThemeSwitcher from './theme-switch.tsx'
import { Icon } from './ui/icon.tsx'

export function Menu() {
	function menuItemClassList(isActive: boolean): string {
		return (
			'transition-opacity ' +
			(isActive
				? 'flex flex-col items-center text-highlight md:after:absolute md:after:bottom-0 md:after:w-12 md:after:rounded-3xl md:after:border-2 md:after:border-highlight'
				: 'flex flex-col items-center opacity-50 hover:text-highlight')
		)
	}
	const menuItemTextClassList = 'capitalize mt-1 md:mt-2 font-light'

	const menuSidesClassList =
		'flex items-center justify-evenly md:gap-5 py-2 md:py-5 md:px-6'

	return (
		<div className="custom-bottom-alignment fixed w-full max-md:text-xs md:text-sm">
			<div className="mx-2">
				<div className="mx-auto flex max-h-[95px] max-w-[900px] justify-center rounded-xl bg-menu-box-gradient shadow-menu md:rounded-2xl">
					<nav
						className={cn(
							menuSidesClassList,
							'rounded-xl bg-background-bases shadow-menu-container max-md:w-full md:w-3/5 md:rounded-2xl',
						)}
					>
						<NavLink to="/">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="home" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>Home</p>
								</div>
							)}
						</NavLink>

						<NavLink to="projects">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="dashboard" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>projects</p>
								</div>
							)}
						</NavLink>

						<NavLink to="portfolio">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="laptop" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>Portfolio</p>
								</div>
							)}
						</NavLink>

						<NavLink to="about">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon
										name="magnifying-glass"
										className="h-5 w-5 md:h-6 md:w-6"
									/>
									<p className={menuItemTextClassList}>about</p>
								</div>
							)}
						</NavLink>

						<NavLink to="contact" className="max-md:hidden">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon
										name="envelope-closed"
										className="h-5 w-5 md:h-6 md:w-6"
									/>
									<p className={menuItemTextClassList}>contact</p>
								</div>
							)}
						</NavLink>
					</nav>

					<div className={cn(menuSidesClassList, 'max-md:hidden md:w-2/5')}>
						<div>
							socials:{' '}
							<a
								href="https://instagram.com/wochlife"
								target="_blank"
								rel="noreferrer"
								className='hover:text-highlight transition-colors'
							>
								@wochlife
							</a>
						</div>

						{/* <ThemeSwitcher /> */}
					</div>
				</div>
			</div>
		</div>
	)
}
