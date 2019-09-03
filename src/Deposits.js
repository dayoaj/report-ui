/* eslint-disable no-script-url */

import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import { Link as RouterLink } from "react-router-dom";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Tonnage for Current Month</Title>
      <Typography component="p" variant="h4">
        3,024.00 Tons
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 03 September, 2019
      </Typography>
      <div>
        <Link color="primary" to="/">
          View more
        </Link>
      </div>
    </React.Fragment>
  );
}
