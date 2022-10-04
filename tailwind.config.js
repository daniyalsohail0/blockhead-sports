module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bronze: "#F2994A",
        silver: "#C1C1C1",
        gold: "#E3BD18",
        slate: "#2B3B43",
        ash: "#232B2D",
        pastel: "#F5EBE0",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        xs: [
          "14px",
          {
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "16px",
            letterSpacing: "2px",
          },
        ],
        sm: [
          "16px",
          { fontWeight: 400, lineHeight: "28px", letterSpacing: "0em" },
        ],
        lg: [
          "24px",
          { fontWeight: 400, lineHeight: "40px", letterSpacing: "0em" },
        ],
        xl: [
          "32px",
          { fontWeight: 400, lineHeight: "40px", letterSpacing: "0em" },
        ],
        "2xl": [
          "64px",
          { fontWeight: 400, lineHeight: "60px", letterSpacing: "0em" },
        ],
        h1: [
          "72px",
          {
            fontWeight: 100,
            fontStyle: "normal",
            lineHeight: "72px",
            letterSpacing: "0em",
            textTransform: "uppercase",
          },
        ],
        h2: [
          "56px",
          {
            fontWeight: 100,
            fontStyle: "normal",
            lineHeight: "56px",
            letterSpacing: "0em",
            textTransform: "uppercase",
          },
        ],
      },
      fontFamily: {
        minecraft: ["Minecraft"],
        "minecraft-bold": ["Minecraft bold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
