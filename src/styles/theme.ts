import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      "450": "rgba(255, 186, 8, 0.5)",
      "900": "#FFBA08",
    },
    dark: {
      "250": "rgba(153, 153, 153, 0.5)",
      "500": "#999999",
      "750": "#47585B",
      "900": "#000"
    },
    light: {
      "50": "#FFF",
      "100": "#F5F8FA",
      "200": "#DADADA"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: "light.100",
      },
    },
  },
});