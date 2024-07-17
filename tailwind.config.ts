/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
      extend: {
        colors: {
          'dark': '#0F172A',
          'primary': '#7E4BFA',
          'secondary': '#4ADE80',
          
        },
          container: {
              center: true,
              padding: {
                  DEFAULT: "1rem",
              },
          },
          fontFamily: {
              inter: ["Inter", "sans-serif"],
          },
      },
  },
  plugins: [],
};
