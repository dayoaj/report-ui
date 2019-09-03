import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { green, yellow } from "@material-ui/core/colors";
import { BrowserRouter as Router } from "react-router-dom";
import AppShell from "./AppShell";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: yellow
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}

export default App;
