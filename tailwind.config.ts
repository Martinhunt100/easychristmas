import type { Config } from 'tailwindcss';
export default {
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
candleRed: '#C93434',
hollyGreen: '#2F7D3E',
goldFlame: '#F5C451',
warmCream: '#FFF9EC',
choco: '#4A2C24'
},
borderRadius: { xl: '1rem', '2xl': '1.25rem' }
}
},
plugins: []
} satisfies Config;
