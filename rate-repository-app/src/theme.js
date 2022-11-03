import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      bar: "#24292e",
      tab: "#fff",
      tag: "#0366d6",
      background: "#e1e4e8"
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        default: 'System',
        ios: "Arial",
        android: "Roboto"
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    padding: {
      navbar: 15
    }
  };
  
  export default theme;