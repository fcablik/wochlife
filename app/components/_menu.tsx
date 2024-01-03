import { NavLink } from '@remix-run/react'
import { cn } from '#app/utils/misc.tsx'
// import ThemeSwitcher from './theme-switch.tsx'
import { Icon } from './ui/icon.tsx'

export function Menu() {
	function menuItemClassList(isActive: boolean): string {
		return (
			'transition-all duration-300 flex flex-col items-center ' +
			(isActive
				? 'text-highlight lg:after:absolute lg:after:bottom-0 lg:after:w-12 lg:after:rounded-3xl lg:after:border-2 lg:after:border-highlight'
				: 'opacity-50 hover:text-highlight')
		)
	}
	const menuItemTextClassList = 'capitalize mt-1 lg:mt-2 font-light'

	const menuSidesClassList =
		'flex items-center justify-evenly lg:gap-5 py-2 lg:py-5 lg:px-6'

	return (
		<div className="custom-bottom-alignment fixed w-full max-lg:text-xs lg:text-sm">
			<div className="mx-2">
				<div className="mx-auto flex max-h-[95px] max-w-[900px] justify-center rounded-xl bg-menu-box-gradient shadow-menu lg:rounded-2xl">
					<nav
						className={cn(
							menuSidesClassList,
							'rounded-xl bg-background-bases shadow-menu-container max-lg:w-full lg:w-3/5 lg:rounded-2xl',
						)}
					>
						<NavLink to="/">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="home" className="h-5 w-5 lg:h-6 lg:w-6" />
									<p className={menuItemTextClassList}>Home</p>
								</div>
							)}
						</NavLink>

						<NavLink to="projects">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="dashboard" className="h-5 w-5 lg:h-6 lg:w-6" />
									<p className={menuItemTextClassList}>projects</p>
								</div>
							)}
						</NavLink>

						<NavLink to="portfolio">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="desktop" className="h-5 w-5 lg:h-6 lg:w-6" />
									<p className={menuItemTextClassList}>Portfolio</p>
								</div>
							)}
						</NavLink>

						<NavLink to="about" className="max-lg:hidden">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon
										name="question-mark-circled"
										className="h-5 w-5 lg:h-6 lg:w-6"
									/>
									<p className={menuItemTextClassList}>about</p>
								</div>
							)}
						</NavLink>

						<NavLink to="contact">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon
										name="envelope-closed"
										className="h-5 w-5 lg:h-6 lg:w-6"
									/>
									<p className={menuItemTextClassList}>contact</p>
								</div>
							)}
						</NavLink>
					</nav>

					<div className={cn(menuSidesClassList, 'max-lg:hidden lg:w-2/5')}>
						<div>
							socials:{' '}
							<a
								href="https://instagram.com/filipcablik"
								target="_blank"
								rel="noreferrer"
								className="transition-colors hover:text-highlight"
							>
								@filipcablik
							</a>
						</div>

						{/* <ThemeSwitcher /> */}
					</div>
				</div>
			</div>
		</div>
	)
}
