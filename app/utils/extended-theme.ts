import { type Config } from 'tailwindcss'

export const extendedTheme = {
	colors: {
		border: 'hsl(var(--border))',
		input: {
			DEFAULT: 'hsl(var(--input))',
			invalid: 'hsl(var(--input-invalid))',
		},
		ring: {
			DEFAULT: 'hsl(var(--ring))',
			invalid: 'hsl(var(--foreground-destructive))',
		},

		background: {
			DEFAULT: 'hsl(var(--background))',
			bases: 'hsl(var(--background-bases))',
			component: {
				DEFAULT: 'hsl(var(--bg-component))',
				light: 'hsl(var(--bg-component-light))',
			},
			gradient: {
				start: 'hsl(var(--bg-gradient-start))',
				end: 'hsl(var(--bg-gradient-end))',
			},
		},
		foreground: {
			DEFAULT: 'hsl(var(--foreground))',
			destructive: 'hsl(var(--foreground-destructive))',
			component: 'hsl(var(--fg-component))',
		},

		backgroundDashboard: 'hsl(var(--background-dashboard))',
		foregroundDashboard: {
			DEFAULT: 'hsl(var(--foreground-dashboard))',
			danger: 'hsl(var(--foreground-danger))',
		},

		primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		},
		secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		},
		highlight: {
			DEFAULT: 'hsl(var(--highlight))',
			foreground: 'hsl(var(--highlight-foreground))',
			dark: 'hsl(var(--highlight-dark))',
		},
		highlightLight: {
			DEFAULT: 'hsl(var(--highlight-light))',
			foreground: 'hsl(var(--highlight-light-foreground))',
		},
		destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		},
		muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		},
		accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		},
		popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		},
		card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		},
	},
	boxShadow: {
		'admin-detail-box': '0px 0px 15px rgba(0, 0, 0, .15)',
		menu: '0px -10px 15px rgba(0, 0, 0, .1)',
		'menu-container': '5px 0px 15px rgba(0, 0, 0, .1)',
		'page-container': '0px 10px 10px rgba(0, 0, 0, .1)',
	},
	width: {
		container: '32rem',
	},
	minWidth: {
		'1/2': '50%',
		'1/3': '33.33%',
		'2/3': '66.66%',
	},
	maxWidth: {
		'1/2': '50%',
		'1/3': '33.33%',
		'2/3': '66.66%',
		'2/5': '40%',
		'3/5': '60%',
		'3/4': '75%',
		'lg-to-xl':	'1124px',
		'lg-to-xl-2': '1200px',
		'lg-to-xl-3': '1300px',
	},
	borderRadius: {
		'6xl': 'calc(var(--radius) * 5.5)',
		'5xl': 'calc(var(--radius) * 5)',
		'4xl': 'calc(var(--radius) * 4.5)',
		'3xl': 'calc(var(--radius) * 4)',
		'2xl': 'calc(var(--radius) * 3)',
		'xl-to-2xl': 'calc(var(--radius) * 2.25)',
		xl: 'calc(var(--radius) * 2)',
		'lg-to-xl': 'calc(var(--radius) * 1.5)',
		lg: 'var(--radius)',
		md: 'calc(var(--radius) - 2px)',
		sm: 'calc(var(--radius) - 4px)',
	},
	fontSize: {
		// 1rem = 16px
		/** 80px size / 84px high / bold */
		mega: ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
		/** 56px size / 62px high / bold */
		h1: ['3.25rem', { lineHeight: '3.55rem', fontWeight: '700' }],
		'h1-sm': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
		'h1-md': ['2.75rem', { lineHeight: '3rem', fontWeight: '700' }],
		/** 40px size / 48px high / bold */
		h2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
		/** 32px size / 36px high / bold */
		h3: ['2rem', { lineHeight: '2.25rem', fontWeight: '700' }],
		/** 28px size / 36px high / bold */
		h4: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
		/** 24px size / 32px high / bold */
		h5: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
		/** 16px size / 20px high / bold */
		h6: ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],

		/** 32px size / 36px high / normal */
		'body-3xl': ['2rem', { lineHeight: '2.25rem' }],
		/** 32px size / 36px high / normal */
		'body-2xl': ['2rem', { lineHeight: '2.25rem' }],
		/** 28px size / 36px high / normal */
		'body-xl': ['1.75rem', { lineHeight: '2.25rem' }],
		/** 24px size / 32px high / normal */
		'body-lg': ['1.5rem', { lineHeight: '2rem' }],
		/** 20px size / 28px high / normal */
		'body-md': ['1.25rem', { lineHeight: '1.75rem' }],
		/** 16px size / 20px high / normal */
		'body-sm': ['1rem', { lineHeight: '1.25rem' }],
		/** 14px size / 18px high / normal */
		'body-xs': ['0.875rem', { lineHeight: '1.125rem' }],
		/** 12px size / 16px high / normal */
		'body-2xs': ['0.75rem', { lineHeight: '1rem' }],

		'body-base': ['.925rem', { lineHeight: '1.4rem' }],
		'body-prebase': ['.875rem', { lineHeight: '1.2rem' }],

		/** 18px size / 24px high / semibold */
		caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
		/** 12px size / 16px high / bold */
		button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],

		'md': ['1rem', { lineHeight: '1.45rem', fontWeight: '400' }],
		'md-to-lg': ['1.1rem', { lineHeight: '1.55rem', fontWeight: '400' }],
		'xl-to-2xl': ['1.3rem', { lineHeight: '1.75rem', fontWeight: '400' }],
	},
	keyframes: {
		'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		},
		'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		},
	},
	animation: {
		'accordion-down': 'accordion-down 0.2s ease-out',
		'accordion-up': 'accordion-up 0.2s ease-out',
	},
	zIndex: {
		'1': '1',
		'2': '2',
		'9': '9',
		'10': '10',
		'49': '49',
		'99': '99',
		'100': '100',
		'999': '999',
		'1000': '1000',
		'1001': '1001',
		'1999': '1999',
		'2000': '2000',
		'2001': '2001',
		'3000': '3000',
		'3001': '3001',
		'9999': '9999',
	},
	backgroundImage: {
		'dark-gradient':
			'linear-gradient(to bottom right, rgba(27, 27, 27, 0.8) 0%, rgba(16, 16, 16, 0.8) 50%, rgba(16, 16, 16, .9) 100%)',
		'menu-box-gradient':
			'linear-gradient(to bottom right, rgba(24, 24, 24, .86) 0%, rgba(18, 18, 18, .86) 50%, rgba(16, 16, 16, .9) 100%)',
		'purple-box-gradient':
			'linear-gradient(to bottom right, rgba(106, 95, 243, .7) 0%, rgba(117, 99, 247, .7) 50%, rgba(130, 96, 245, .7) 100%)',
		'light-green-radial-gradient': 'radial-gradient(circle, #85F1C5, #83D9CD)',
		'medi-radial-gradient': 'radial-gradient(circle, #A40E68, #A40E68)',
		'medi-logo': 'url("/img/medi.webp")',
		'11ts-radial-gradient': 'radial-gradient(circle, #D82020, #A71C1C)',
		'11ts-logo': 'url("/img/11ts.webp")',
		't4s-radial-gradient': 'radial-gradient(circle, #D07009, #F98305)',
		't4s-logo': 'url("/img/t4s.webp")',
	},
	padding: {
		'18': '4.5rem',
	},
	height: {
		'22': '5.5rem',
	},
	backdropBlur: {
		xs: '2px',
	},
	scale: {
        'flip': '-1',
	}
} satisfies Config['theme']
