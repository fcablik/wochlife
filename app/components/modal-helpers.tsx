import { cn } from '#app/utils/misc.tsx'
import { Button } from './ui/button.tsx'
import { Icon } from './ui/icon.tsx'

const backdropClassList =
	'custom-fade-in fixed left-0 top-0 w-full cursor-pointer overflow-hidden transition-all'

export const modalBackdropClassList = cn(
	backdropClassList,
	'backdrop-blur-sm',
	'h-[100vh] z-999 bg-black/40 ',
)

export const modalBackdropLightClassList = cn(
	backdropClassList,
	'backdrop-blur-xs',
	'z-3001 h-[100vh] bg-black/10',
)

export const calendarBackdropClassList =
	'custom-fade-in absolute rounded-xl left-0 top-0 z-99 h-full w-full overflow-hidden bg-black/70 cursor-pointer'

export const modalBackDropOnBackdropClassList = cn(
	backdropClassList,
	'backdrop-blur-sm',
	'bg-black/20 h-full z-3000',
)

export function MobileModalCaretOpener({
	isMobExtraMenuToggled,
	triggerTitle,
	handleToggle,
	classList,
}: {
	isMobExtraMenuToggled: boolean
	triggerTitle?: string
	handleToggle: () => void
	classList?: string
}) {
	return (
		<>
			{!isMobExtraMenuToggled ? (
				!triggerTitle ? (
					<Icon
						name="plus"
						className={cn(
							classList,
							'fixed bottom-28 right-3 z-1999 h-8 w-8 cursor-pointer gap-3 rounded-lg bg-foreground p-[.15rem] text-background transition-colors hover:bg-highlight hover:text-foreground',
						)}
						onClick={handleToggle}
					/>
				) : (
					<>
						<Button
							onClick={handleToggle}
							size="sm"
							variant="highlight-secondary"
							className={cn(
								classList,
								'fixed bottom-28 right-3 z-1999 cursor-pointer capitalize',
							)}
						>
							{triggerTitle}
						</Button>
					</>
				)
			) : (
				<div onClick={handleToggle} className={modalBackdropClassList} />
			)}
		</>
	)
}

export function ModalCloserIcon({
	handleToggle,
	iconName = 'cross-1',
}: {
	handleToggle: () => void
	iconName?: string
}) {
	return (
		<Icon
			name={iconName}
			size="md"
			className="absolute right-6 top-6 z-2000 cursor-pointer text-white transition-opacity hover:opacity-70"
			onClick={handleToggle}
		/>
	)
}
