/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    ],
    mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#C92071",
        secondary: "#B5B6F2",
        terciary: "#991956",
        error: "#EE4266",
        success: "#52CA76",
        warning: "#F6AA1C",
        primaryGradient: "linear-gradient(90deg, #C92071 0%, #EDABCA 100%)",
        secondaryGradient: "linear-gradient(90deg, #B5B6F2 0%, #EFEFFF 100%)",
        darkGray: "#1F1F1F",
        darkGray2: "#474747",
        darkGray3: "#666666",
        lightGray: "#8F8F8F",
        lightGray2: "#CCCCCC",
        lightGray3: "#F5F5F5",
      },
      grayscale: {
        darkGray: "#1F1F1F",
        darkGray2: "#474747",
        darkGray3: "#666666",
        lightGray: "#8F8F8F",
        lightGray2: "#CCCCCC",
        lightGray3: "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      fontSize: {
        "tiny": [".75rem", "18px"],
        "xs": [".875rem", "22px"],
        "sm": ["1rem", "28px"],
        "md": ["1.125rem", "34px"],
        "lg": ["1.5rem", "38px"],
        "xl": ["1.75rem", "36px"],
        "2xl": ["2rem", "36px"],
        "3xl": ["3rem", "50px"],
        "4xl": ["4rem", "66px"],
      },
      boxShadow: {
        'header': "0px 10px 30px 0px rgba(141, 114, 32, 0.05)",
        'card': "6px 16px 30px 0px rgba(105, 98, 98, 0.05)",
        'cardHover': "4px 10px 10px rgba(0, 0, 0, 0.4)",
      }
    },
  },
  plugins: []
}

