"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { muiThemeConfig } from "../styles/theme";

// Create the theme on the client side
const createMuiTheme = () => {
  return createTheme(muiThemeConfig);
};

export default function ClientThemeProvider({ children }) {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
