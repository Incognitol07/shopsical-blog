/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: '#FAFAFA', // Light background
				foreground: '#0F172A', // Dark text
				primary: '#0066FF', // Vibrant Blue (Brand)
				'primary-dark': '#0052CC',
				secondary: '#FFD700', // Vibrant Yellow
				tertiary: '#FF3366', // Vibrant Pink/Red
				'card-bg': '#FFFFFF',
				'card-border': '#E2E8F0',
				muted: '#64748B',
				
				// Keep some existing colors if needed for compatibility, but remapped
				'card-dark': '#F8FAFC', 
				'pink-600': '#FF3366',
				'pink-200': '#FFC6F0',
				gold: '#FFD700',
				'accent-1': '#F1F5F9',
				'accent-2': '#E2E8F0',
				'accent-7': '#334155',
				success: '#10B981',
				cyan: '#06B6D4',
			},
			fontFamily: {
				sans: ['var(--font-sora)', 'sans-serif'],
				heading: ['var(--font-sora)', 'sans-serif'],
				poppins: ['var(--font-poppins)', 'sans-serif'],
			},
			typography: () => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': '#334155', // Slate-700
						'--tw-prose-headings': '#0F172A', // Slate-900
						'--tw-prose-links': '#0066FF', // Primary Blue
						'--tw-prose-bold': '#0F172A',
						'--tw-prose-counters': '#64748B',
						'--tw-prose-bullets': '#64748B',
						'--tw-prose-hr': '#E2E8F0',
						'--tw-prose-quotes': '#0F172A',
						'--tw-prose-quote-borders': '#E2E8F0',
						'--tw-prose-captions': '#64748B',
						'--tw-prose-code': '#0F172A',
						'--tw-prose-pre-code': '#E2E8F0',
						'--tw-prose-pre-bg': '#1E293B',
						'div[data-node-type="callout"]': {
							display: 'flex',
							'justify-content': 'flex-start',
							'align-items': 'flex-start',
							'background-color': '#F1F5F9', // Light Slate Bg
							border: '1px solid #E2E8F0',
							padding: ' 1rem 1.5rem',
							gap: '0.5rem',
							'border-radius': '0.5rem',
							margin: '1rem 0',
							'word-break': 'break-word',
							color: '#334155',
						},
						'div[data-node-type="callout-emoji"]': {
							background: '#E2E8F0',
							'border-radius': '0.5rem',
							minWidth: '1.75rem',
							width: '1.75rem',
							height: '1.5rem',
							display: 'flex',
							'margin-top': '0.3rem',
							'justify-content': 'center',
							'align-items': 'center',
							'font-size': '1rem',
						},
					},
				},
			}),
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
				glow: '0 0 15px rgba(255, 51, 204, 0.5)',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shimmer: 'shimmer 2s linear infinite',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				shimmer: {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
	],
};
