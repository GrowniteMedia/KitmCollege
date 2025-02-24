/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'xs': '350px',
				'xms': '444px',
				'4k': '2560px'
			},
			fontFamily: {
			'markot': ['Mark_OT'],
			'bricolage': ['BricolageGrotesque'],
			'be_vietnam_pro': ['Be Vietnam Pro'],
			},
			colors: {
				'gradient-blue': 'linear-gradient(90deg, #004aad, #0a58ca)', // Blue gradient
				'bg/primary/1': '#f8f6f3',
				'bg/secondry': '#ebe8e2',
				'grey/grey/1': '#f2f2f2',
				'grey/grey/2': '#d9d9d9',
				'grey/grey/3': '#949494',
				'grey/grey/4': '#666666',
				'grey/grey/5': '#252525',
				'grey/grey/100': '#c0c0c0',
				'blue/blue/5': '#6b6682',
				'blue/blue/3': '#6b6682',
				'purple/sg': '#6B53DD',
				'dark/card/bg': '#232323',
				'brand/black':'#1c1b1b',
				'smoky/black':'#0e0e0e',
				'black/1':'#181818',
				's24/from':'#ffcf92',
				's24/to':'#ffe8cb',
				's23p/from':'#ca86ff',
				's23p/to':'#85e2fd',
				's23/from':'#DACFF9',
				's23/to':'#5C5C7E',
				'p55/from': '#D5EEF9',
				'p55/to': '#70A2E1',
				'a-80-dark':'#161410',
			},
			backgroundImage: {
				'gradient-blue': 'linear-gradient(120deg, #021e44, #0a58ca)', // Define the gradient here
			  },
			fontSize: {
				'desktop/large/h': ['136px', {
					lineHeight: '149.6px',
					fontWeight: '500'
				}],
				'featurephone/heading': ['60px', {
					lineHeight: '72px',
					fontWeight: '500',
					letterSpacing:'-1.2px'
				}],
				'featurephone/paragraph': ['16px', {
					lineHeight: '22.7px',
					fontWeight: '400',
				}],
				'desktop/h1': ['80px', {
					lineHeight: '96px',
					letterSpacing: '-2.4px',
					fontWeight: '500'
				}],
				'desktop/h2': ['48px', {
					lineHeight: '57.6px',
					letterSpacing: '-1.92px',
					fontWeight: '500'
				}],
				'desktop/h3': ['36px', {
					lineHeight: '46.8px',
					letterSpacing: '-0.72px',
					fontWeight: '500'
				}],
				'desktop/h4': ['24px', {
					lineHeight: '31.2px',
					letterSpacing: '-0.48px',
					fontWeight: '500'
				}],
				'desktop/h5': ['20px', {
					lineHeight: '26px',
					letterSpacing: '0.2px',
					fontWeight: '700'
				}],
				'desktop/h5/medium': ['20px', {
					lineHeight: '26px',
					letterSpacing: '-0.2px',
					fontWeight: '500'
				}],
				'desktop/h6/medium': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: '0.16px',
					fontWeight: '500'
				}],
				'desktop/body/1': ['16px', {
					lineHeight: '25.6px',
					fontWeight: '400'
				}],
				'desktop/body/2/medium': ['14px', {
					lineHeight: '22.4px',
					letterSpacing: '-0.28px',
					fontWeight: '500'
				}],
				
				'desktop/body/2/regular': ['14px', {
					lineHeight: '22.4px',
					letterSpacing: '-0.14px',
					fontWeight: '400'
				}],
				'desktop/button': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: '0.16px',
					fontWeight: '700'
				}],
				'desktop/body/large': ['20px', {
					lineHeight: '32px',
					letterSpacing: '-0.2px',
					fontWeight: '400'
				}],
				'desktop/subtitle': ['14px', {
					lineHeight: '22.4px',
					letterSpacing: '-0.28px',
					fontWeight: '500'
				}],
				'desktop/caption': ['12px', {
					lineHeight: '19.2px',
					letterSpacing: '0.24px',
					fontWeight: '400'
				}],
				'desktop/title': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: '0.32px',
					fontWeight: '500'
				}],
				'desktop/tertiary/cta': ['14px', {
					lineHeight: '22.4px',
					fontWeight: '500',
				}],
				'desktop/stikethrough/text': ['12px', {
					lineHeight: '19.2px',
					letterSpacing: '0.24px',
					fontWeight: '400',
				}],
				'desktop/overline': ['10px', {
					lineHeight: '16px',
					letterSpacing: '0.2px',
					fontWeight: '400'
				}],
				'mobile/h1': ['36px', {
					lineHeight: '43.2px',
					letterSpacing: '-0.72px',
					fontWeight: '500'
				}],
				'mobile/h2': ['32px', {
					lineHeight: '38.4px',
					letterSpacing: '-0.64px',
					fontWeight: '500'
				}],
				'mobile/h3': ['28px', {
					lineHeight: '33.6px',
					letterSpacing: '-0.28px',
					fontWeight: '500'
				}],
				'mobile/h4': ['24px', {
					lineHeight: '31.2px',
					letterSpacing: '-0.24px',
					fontWeight: '500'
				}],
				'mobile/h5': ['20px', {
					lineHeight: '26px',
					letterSpacing: '0.2px',
					fontWeight: '700'
				}],
				'mobile/h5/medium': ['20px', {
					lineHeight: '26px',
					fontWeight: '500'
				}],
				'mobile/h6': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: '-0.16px',
					fontWeight: '500'
				}],
				'mobile/h7': ['12px', {
					lineHeight: '16.8px',
					letterSpacing: '0.17px',
					fontWeight: '500'
				}],
				'mobile/title': ['14px', {
					lineHeight: '22.4px',
					letterSpacing: '-0.28px',
					fontWeight: '500'
				}],
				'mobile/body/2': ['12px', {
					lineHeight: '18px',
					letterSpacing: '-0.24px',
					fontWeight: '400'
				}],
				'mobile/small/body': ['10px', {
					lineHeight: '14px',
					letterSpacing: '0.2px',
					fontWeight: '400'
				}],
				'mobile/body/large': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: '0.14px',
					fontWeight: '500'
				}],
				'moblie/strikethrough': ['10px', {
					lineHeight: '16px',
					letterSpacing: '0.2px',
					fontWeight: '400'
				}],
				'mobile/button': ['12px', {
					lineHeight: '19.2px',
					letterSpacing: '-0.24px',
					fontWeight: '500'
				}],
				'mobile/small/button': ['12px', {
					lineHeight: '18px',
					letterSpacing: '-0.24px',
					fontWeight: '500'
				}],
				// '': ['', {
				// 	lineHeight: '',
				// 	letterSpacing: '',
				// 	fontWeight: ''
				// }],
			},
	
		},
	},
	plugins: [],	
}
