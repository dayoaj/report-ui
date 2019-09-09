import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles(theme => ({
//   listItem: {
//     padding: theme.spacing(1, 0)
//   },
//   total: {
//     fontWeight: "700"
//   },
//   title: {
//     marginTop: theme.spacing(2)
//   }
// }));

export default function TotalCargoDischarged() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Total Cargo Discharged
      </Typography>
    </React.Fragment>
  );
}
