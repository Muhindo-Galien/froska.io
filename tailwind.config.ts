import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'GilroyMedium': ['Gilroy-Medium', 'sans-serif'],
        'GilroyBold':  ['Gilroy-Bold', 'sans-serif'],
        'GilroyRegular':['Gilroy-Regular', 'sans-serif'],
        'GilroyHeavyItalic':['Gilroy-HeavyItalic', 'sans-serif'],
        'GilroyExtrabold':['Gilroy-Extrabold', 'sans-serif'],
        'GilroySemibold':['Gilroy-Semibold', 'sans-serif'],
      },
      screens: {
        mf: '990px',
        cr: '500px'
      },

    },
  },
  plugins: [],
}
export default config
