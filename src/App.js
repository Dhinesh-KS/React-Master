import React from "react";
import Sample from "./app/components/sample";
import SideMenu from "./app/components/SideMenu";
import Header from "./app/components/Header";
import { makeStyles, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  console.log(classes);

  return (
    <React.Fragment>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
      {/* <Sample/> */}
    </React.Fragment>
  );
}

export default App;
