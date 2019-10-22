/* eslint-disable no-script-url */

import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import { Link as RouterLink } from "react-router-dom";
import Title from "./Title";

// Generate Order Data
function createData(
  id,
  vesselName,
  rNo,
  regTonnage,
  agent,
  berthed,
  sailed,
  amountPaid
) {
  return {
    id,
    vesselName,
    rNo,
    regTonnage,
    agent,
    berthed,
    sailed,
    amountPaid
  };
}

const rows = [
  createData(
    0,
    "LNG BONNY 11",
    "16/1049",
    115995,
    "Fountain",
    "31-Dec",
    "2-Jan",
    437572.01
  ),
  createData(
    1,
    "LNG AKWA IBOM",
    "16/1072",
    115993,
    "Fountain",
    "1-Jan",
    "3-Jan",
    379735.51
  ),
  createData(
    2,
    "LNG RIVER ORASHI",
    "16/1077",
    97874,
    "Integrated",
    "4-Jan",
    "5-Jan",
    364880.87
  ),
  createData(
    3,
    "LNG BORNO",
    "16/1076",
    97874,
    "Internship",
    "5-Jan",
    "6-Jan",
    3722166.68
  ),
  createData(
    4,
    "LNG CROSS RIVER",
    "16/1073",
    115995,
    "Fountain",
    "6-Jan",
    "7-Jan",
    379969.87
  ),
  createData(
    5,
    "LNG RIVERS",
    "17/013",
    115995,
    "Fountain",
    "7-Jan",
    "10-Jan",
    372535.44
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Traffic() {
  const classes = useStyles();

  function formatNumber(value) {
    return value.toLocaleString();
  }

  return (
    <React.Fragment>
      <Title>Recent Traffic Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name of Vessel</TableCell>
            <TableCell>Rotation Number</TableCell>
            <TableCell align="right">Registered Tonnage (Gross)</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>Berthed</TableCell>
            <TableCell>Sailed</TableCell>
            <TableCell align="right">Amount Paid ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.vesselName}</TableCell>
              <TableCell>{row.rNo}</TableCell>
              <TableCell align="right">
                {formatNumber(row.regTonnage)}
              </TableCell>
              <TableCell>{row.agent}</TableCell>
              <TableCell>{row.berthed}</TableCell>
              <TableCell>{row.sailed}</TableCell>
              <TableCell align="right">
                {formatNumber(row.amountPaid)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" to="/">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
