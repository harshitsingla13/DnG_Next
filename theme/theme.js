// themes/theme.js

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

let theme = createTheme({
  breakpoints,
  palette: {
    // your palette options
  },
  typography: {
    // your typography options
  },
  // other theme options
});

theme = responsiveFontSizes(theme);

export default theme;
