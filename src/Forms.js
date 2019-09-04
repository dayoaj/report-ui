import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

export default function Forms() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {/* Create Forms for manually filled data*/}
      <Grid item xs={12}>
        <Paper className={classes.paper} />
      </Grid>
    </Grid>
  );
}
