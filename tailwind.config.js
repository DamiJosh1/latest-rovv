/** @type {import('tailwind').config}*/
export default {
    content:[
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {

            colors: {
                primary: '#341356',
                accent: '#5E239D',
                dark:'#141414',
                light: '#FFFAF2',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

