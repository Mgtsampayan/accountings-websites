/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'slow-zoom': 'slow-zoom 10s ease-in-out infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'slow-zoom': {
                    '0%, 100%': { transform: 'scale(1.05)' },
                    '50%': { transform: 'scale(1.1)' },
                },
            },
            colors: {
                'custom-green': '#194901',
            },
        },
    },
    plugins: [],
}