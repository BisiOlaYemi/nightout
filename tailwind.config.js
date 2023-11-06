/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#19303C',
        secondary: '#8C8FA7',
        grey: '#E8E8E8',
        orange: '#FFA665',
        faintOrange: '#F5C398',
        deepMaroon: '#BC254B',
        homepage: '#E0DDDD',
        purpleBlood: '#2D0A09',
        lightbrown: '#E3C8A1',
        lightPurple: '#F9D8EE',
        coolDark: '#2D0A09',
      },
      screens: {
        xxmobile: '361px',
        xmobile: '390px',
        mobile: '480px',
        lgMobile: '560px',
        xmd: '660px',
        xxmd: '690px',
        md: '830px',
        smLaptop: '920px',
        laptop: '1024px',
        xlaptop: '1070px',
        desktop: '1230px',
        lgDesktop: '1330px',
        xDesktop: '1400px',
        extraLarge: '2000px',
      },
    },
  },
  plugins: [],
};
