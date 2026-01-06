/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: '#121212',
				'card-dark': 'hsl(222.2 84% 4.9%)',
				primary: '#FF33CC',
				'pink-600': '#E60099',
				'pink-200': '#FFC6F0',
				gold: '#FFD54F',
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
			},
			fontFamily: {
				sans: ['"Poppins"', 'sans-serif'],
				heading: ['"Sora"', 'sans-serif'],
			},
			typography: () => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': '#EAEAEA',
						'--tw-prose-headings': '#FFFFFF',
						'--tw-prose-links': '#FF33CC',
						'div[data-node-type="callout"]': {
							display: 'flex',
							'justify-content': 'flex-start',
							'align-items': 'flex-start',
							'background-color': '#1E1E1E',
							border: '1px solid #333',
							padding: ' 1rem 1.5rem',
							gap: '0.5rem',
							'border-radius': '0.5rem',
							margin: '1rem 0',
							'word-break': 'break-word',
							color: '#EAEAEA',
						},
						'div[data-node-type="callout-emoji"]': {
							background: '#333',
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
