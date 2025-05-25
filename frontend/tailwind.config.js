import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",  // ✅ Correct syntax
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}