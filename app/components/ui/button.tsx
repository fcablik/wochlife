import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '#app/utils/misc.tsx'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-2xl text-sm font-medium bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:bg-background disabled:pointer-events-none disabled:opacity-50 transition duration-300',
	{
		variants: {
			variant: {
				default: 'bg-foreground/70 text-background hover:bg-foreground',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/80',
				deactivating:
					'bg-destructive/80 text-destructive-foreground hover:bg-destructive',
				outline:
					'border border-input hover:bg-backgroundDashboard hover:text-highlight',
				primary: 'bg-backgroundDashboard border-2 hover:border-highlight',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-highlight hover:text-highlight-foreground',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',

				// highlight w/o Hover
				highlight: 'shadow-highlight bg-highlight text-highlight-foreground',

				// highlight w/ Hover
				'highlight-secondary':
					'font-500 shadow-highlight bg-highlight text-highlight-foreground hover:text-highlight hover:bg-highlight/20 border-2 border-highlight',

				disabled: 'border border-input bg-foreground/20 cursor-auto opacity-60',
				activedashboardSidebar:
					'shadow-lg shadow-highlight bg-highlight text-highlight-foreground',
				dashboardSidebar: 'bg-transparent ',
			},
			size: {
				default: 'px-4 py-3',
				wide: 'px-24 py-5',
				xs: 'h-6 px-4 text-xs',
				sm: 'h-9 px-3',
				lg: 'h-11 px-8',
				xl: 'h-12 px-6 py-2',
				pill: 'px-12 py-3 leading-3',
				icon: 'h-10 w-10',
				dashboardSidebar: 'pl-3 pr-6 py-3 text-lg',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
