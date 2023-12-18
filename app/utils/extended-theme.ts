import { type Config } from 'tailwindcss'

export const extendedTheme = {
	colors: {
		border: 'var(--border)',
		input: {
			DEFAULT: 'var(--input)',
			invalid: 'var(--input-invalid)',
		},
		ring: {
			DEFAULT: 'var(--ring)',
			invalid: 'var(--foreground-destructive)',
		},

		background: {
			DEFAULT: 'var(--background)',
			bases: 'var(--background-bases)',
			component: {
				DEFAULT: 'var(--bg-component)',
				light: 'var(--bg-component-light)',
			},
			gradient: {
				start: 'var(--bg-gradient-start)',
				end: 'var(--bg-gradient-end)',
			},
		},
		foreground: {
			DEFAULT: 'var(--foreground)',
			destructive: 'var(--foreground-destructive)',
			component: 'var(--fg-component)',
		},

		backgroundDashboard: 'var(--background-dashboard)',
		foregroundDashboard: {
			DEFAULT: 'var(--foreground-dashboard)',
			danger: 'var(--foreground-danger)',
		},

		primary: {
			DEFAULT: 'var(--primary)',
			foreground: 'var(--primary-foreground)',
		},
		secondary: {
			DEFAULT: 'var(--secondary)',
			foreground: 'var(--secondary-foreground)',
		},
		highlight: {
			DEFAULT: 'var(--highlight)',
			foreground: 'var(--highlight-foreground)',
			dark: {
				DEFAULT: 'var(--highlight-dark)',
				foreground: 'var(--highlight-dark-foreground)',
			},
		},
		highlightLight: {
			DEFAULT: 'var(--highlight-light)',
			foreground: 'var(--highlight-light-foreground)',
		},
		destructive: {
			DEFAULT: 'var(--destructive)',
			foreground: 'var(--destructive-foreground)',
		},
		muted: {
			DEFAULT: 'var(--muted)',
			foreground: 'var(--muted-foreground)',
		},
		accent: {
			DEFAULT: 'var(--accent)',
			foreground: 'var(--accent-foreground)',
		},
		popover: {
			DEFAULT: 'var(--popover)',
			foreground: 'var(--popover-foreground)',
		},
		card: {
			DEFAULT: 'var(--card)',
			foreground: 'var(--card-foreground)',
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
	},
	borderRadius: {
		'5xl': 'calc(var(--radius) * 5)',
		'4xl': 'calc(var(--radius) * 4.5)',
		'3xl': 'calc(var(--radius) * 4)',
		'2xl': 'calc(var(--radius) * 3)',
		xl: 'calc(var(--radius) * 2)',
		lg: 'var(--radius)',
		md: 'calc(var(--radius) - 2px)',
		sm: 'calc(var(--radius) - 4px)',
	},
	fontSize: {
		// 1rem = 16px
		/** 80px size / 84px high / bold */
		mega: ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
		/** 56px size / 62px high / bold */
		h1: ['3.5rem', { lineHeight: '3.875rem', fontWeight: '700' }],
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

		'body-base': ['.925rem', { lineHeight: '1.2rem' }],

		/** 18px size / 24px high / semibold */
		caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
		/** 12px size / 16px high / bold */
		button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
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
		'dark-box-gradient':
			'linear-gradient(to bottom right, rgba(27, 27, 27, 0.8) 0%, rgba(16, 16, 16, 0.8) 50%, rgba(16, 16, 16, .9) 100%)',
		'menu-box-gradient':
			'linear-gradient(to bottom right, rgba(24, 24, 24, .86) 0%, rgba(18, 18, 18, .86) 50%, rgba(16, 16, 16, .9) 100%)',
		'purple-box-gradient':
			'linear-gradient(to bottom right, rgba(106, 95, 243, .7) 0%, rgba(117, 99, 247, .7) 50%, rgba(130, 96, 245, .7) 100%)',
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
} satisfies Config['theme']
