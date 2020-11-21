import React from "react";
import Sample from "./app/components/sample";
import SideMenu from "./app/components/SideMenu";
import Header from "./app/components/Header";
import Employee from "./app/containers/Employee";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employee />
      </div>
      <CssBaseline />
      {/* <Sample/> */}
    </ThemeProvider>
  );
}

export default App;
