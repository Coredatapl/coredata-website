/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "100-px": "100px",
      },
      minHeight: {
        "210-px": "210px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "450-px": "450px",
        "850-px": "850px",
      },
      colors: {
        // Coredata brand
        coredataBlue: "#3d91fc",
        coredataViolet: "#5E72E4",
      },
    },
  },
  plugins: [],
};
