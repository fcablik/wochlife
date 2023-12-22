import { cn } from '#app/utils/misc.tsx'
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
	handleToggle,
}: {
	isMobExtraMenuToggled: boolean
	handleToggle: () => void
}) {
	return (
		<>
			{isMobExtraMenuToggled && (
				<div onClick={handleToggle} className={modalBackdropClassList} />
			)}
			<Icon
				name={isMobExtraMenuToggled ? 'caret-down' : 'caret-up'}
				size="xl"
				className="fixed bottom-28 right-5 z-2000 rounded-lg bg-foreground text-background"
				onClick={handleToggle}
			/>
		</>
	)
}
