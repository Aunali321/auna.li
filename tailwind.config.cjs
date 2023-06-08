/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#ebf5ff',
					100: '#fff1ee',
					200: '#ffe4de',
					300: '#ffd5cc',
					400: '#ffbcad',
					500: '#fe795d',
					600: '#ef562f',
					700: '#eb4f27',
					800: '#d3330a',
					900: '#d3330a'
				},
				latte: {
					blue: '#1e66f5',
					lavender: '#7287fd',
					sapphire: '#209fb5'
				},
				mocha: {
					lavender: '#b4befe',
					sapphire: '#74c7ec'
				}
			},
			rotate: {
				360: '360deg'
			},
			textDecorationThickness: {
				6: '6px'
			},
			keyframes: {
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'pulse-slow': 'pulse-slow 2s ease-in-out infinite'
			}
		}
	},

	plugins: [
		require('flowbite/plugin'),
		require('@catppuccin/tailwindcss')({
			// prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
			// default is `false`, which means no prefix
			prefix: 'ctp',
			// which flavour of colours to use by default, in the `:root`
			defaultFlavour: 'mocha'
		})
	]
};

module.exports = config;
