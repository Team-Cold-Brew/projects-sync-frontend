/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // ESTA LÍNEA ES CRUCIAL
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

