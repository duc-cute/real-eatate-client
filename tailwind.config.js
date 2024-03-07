/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-50": "#EDEFF6",
        "main-100": "#DBDFEC",
        "main-200": "#B7BFD9",
        "main-300": "#92A0C7",
        "main-400": "#6E80B4",
        "main-500": "#4A60A1",
        "main-600": "#3B4D81",
        "main-700": "#2C3A61",
        "main-800": "#1E2640",
        "main-900": "#0F1320",
        overlay: "rgba(0,0,0,0.5)",
      },
      colors: {
        "main-50": "#EDEFF6",
        "main-100": "#DBDFEC",
        "main-200": "#B7BFD9",
        "main-300": "#92A0C7",
        "main-400": "#6E80B4",
        "main-500": "#4A60A1",
        "main-600": "#3B4D81",
        "main-700": "#2C3A61",
        "main-800": "#1E2640",
        "main-900": "#0F1320",
        paragh: "#E5E5E5",
        error: "#ee3131",
      },
      borderColor: {
        "main-50": "#EDEFF6",
        "main-100": "#DBDFEC",
        "main-200": "#B7BFD9",
        "main-300": "#92A0C7",
        "main-400": "#6E80B4",
        "main-500": "#4A60A1",
        "main-600": "#3B4D81",
        "main-700": "#2C3A61",
        "main-800": "#1E2640",
        "main-900": "#0F1320",
      },
      fontFamily: {
        main: "Inter",
        dance: "Dancing Script",
      },

      width: {
        main: "1320px",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      maxHeight: {
        "title-admin": "70px",
        "body-admin": "calc(100% - 70px)",
      },
    },
  },
  plugins: [],
};
