import { NavLink } from '@remix-run/react'
import { cn } from '#app/utils/misc.tsx'
import ThemeSwitcher from './theme-switch.tsx'
import { Icon } from './ui/icon.tsx'

export function Menu() {
	function menuItemClassList(isActive: boolean): string {
		return 'transition-opacity ' + (isActive
			? 'flex flex-col items-center text-highlight after:absolute after:bottom-0 after:w-12 after:rounded-lg after:border-2 after:border-highlight'
			: 'flex flex-col items-center opacity-50 hover:text-highlight')
	}
const menuItemTextClassList = "capitalize mt-2"

const menuSidesClassList = "flex items-center justify-evenly md:gap-5 py-3 md:px-6"

	return (
		<div className="fixed bottom-3 max-md:text-xs md:text-sm w-full md:bottom-12">
			<div className="mx-2">
				<div className="mx-auto shadow-menu flex max-w-[900px] max-h-[95px] justify-center rounded-xl bg-black/40">
					<nav className={cn(menuSidesClassList, "shadow-menu-container md:w-3/5 max-md:w-full rounded-xl bg-background-bases")}>
						<NavLink to="/">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="home" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>Home</p>
								</div>
							)}
						</NavLink>

						<NavLink to="about">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="file-text" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>about</p>
								</div>
							)}
						</NavLink>

						<NavLink to="projects">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="file-text" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>projects</p>
								</div>
							)}
						</NavLink>

						<NavLink to="portfolio">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="file-text" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>Portfolio</p>
								</div>
							)}
						</NavLink>

						<NavLink to="contact">
							{({ isActive }) => (
								<div className={menuItemClassList(isActive)}>
									<Icon name="file-text" className="h-5 w-5 md:h-6 md:w-6" />
									<p className={menuItemTextClassList}>contact</p>
								</div>
							)}
						</NavLink>
					</nav>

					<div className={cn(menuSidesClassList, "md:w-2/5 max-md:hidden")}>
						<div>socials | links</div>

						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</div>
	)
}
