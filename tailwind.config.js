/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2948CE',
        'secondary': '#21ADE3',
        'custom-green': '#22AD80',
        'custom-yellow': '#CE9500',
        'custom-red': '#FF4040',
        'custom-black': '#212337',
        'custom-gray': '#464858',
        'custom-bg': '#C0C0C0', 
      },
    },
  },
  plugins: [],
}

