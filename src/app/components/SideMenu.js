// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "320px",
//     height: "100%",
//     backgroundColor: "#253053",
//   },
// });

// function SideMenu(props) {
//   const classes = useStyles();
//   return <div className={classes.sideMenu}></div>;
// }

// export default SideMenu;

import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const useStyles = ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

class SideMenu extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <div className={classes.sideMenu}></div>
      </div>
    );
  }
}

export default withStyles(useStyles)(SideMenu);
