import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { extendedTheme } from './app/utils/extended-theme.ts'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'xl': '1400px',
			},
		},
		extend: {
			...extendedTheme,
			fontFamily: {
				sans: ['var(--font-source-code-pro)', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				'xs': '500px',
				'md-to-lg':		'991px',
				'lg-to-xl':		'1124px',
				'lg-to-xl-2':	'1200px',
				'lg-to-xl-3':	'1300px',
				'xl':			'1400px',
				'2xl':			'1500px',
				'3xl':			'1600px',
				'4xl':			'1700px',
				'5xl':			'1800px',
				'6xl':			'1900px',
				'7xl':			'1920px',
			},
		},
	},
	plugins: [animatePlugin, radixPlugin],
} satisfies Config
