import React from "react";
import PageHeader from "../components/PageHeader";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EmployeeForm from "../components/EmployeeForm";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function Employee(props) {
  const classes = useStyles();
  return (
    <>
      <PageHeader title="Page Header" subTitle="Page Description" icon={<PeopleAltIcon />} />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}

export default Employee;
