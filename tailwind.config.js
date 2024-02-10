/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        half: "50vh",
        "50v": "50vh",
        "80v": "80vh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
