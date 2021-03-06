import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox
} from "@material-ui/core";
import EnhancedToolbar from "./EnhancedToolbar";
import initialData from "./initial-data";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2),
    overflowX: "auto"
  },
  table: {
    minWidth: 800,
    [theme.breakpoints.down("sm")]: {
      minWidth: 200
    }
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

export default function Agents() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);
  const [clicked, setClicked] = React.useState(-1);
  const data = Object.keys(initialData.staffs).map(staff => {
    return initialData.staffs[staff];
  });

  const handleSelected = EmployeeID => selected.indexOf(EmployeeID) !== -1;
  const handleClicked = EmployeeID => clicked === EmployeeID;

  const handleSelect = (event, EmployeeID) => {
    const selectedIndex = selected.indexOf(EmployeeID);

    let newSelected = [];

    if (clicked === EmployeeID) {
      return;
    }
    if (!selected.length && clicked !== -1) {
      newSelected = newSelected.concat(selected, EmployeeID, clicked);
      setClicked(-1);
    } else if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, EmployeeID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);

    event.stopPropagation();
  };

  const handleClick = (event, EmployeeID) => {
    if (selected) {
      setSelected([]);
    }

    let newClicked = EmployeeID;

    if (clicked === -1) {
      newClicked = EmployeeID;
    } else if (clicked === EmployeeID) {
      newClicked = -1;
    } else {
      newClicked = EmployeeID;
    }

    setClicked(newClicked);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <EnhancedToolbar
        numSelected={selected.length}
        isClicked={clicked !== -1}
      />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Names</TableCell>
            <TableCell numeric="true">Phone Number</TableCell>
            <TableCell>Portfolio</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            const isSelected = handleSelected(n.EmployeeID);
            const isClicked = handleClicked(n.EmployeeID);
            return (
              <TableRow
                hover
                onClick={event => handleClick(event, n.EmployeeID)}
                role="checkbox"
                aria-checked={isClicked || isSelected}
                tabIndex={-1}
                key={n.EmployeeID}
                selected={isClicked || isSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isClicked || isSelected}
                    onClick={event => handleSelect(event, n.EmployeeID)}
                  />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  {n.FirstName} {n.LastName}
                </TableCell>
                <TableCell numeric="true">{n.PhoneNumber}</TableCell>
                <TableCell>{n.Position}</TableCell>
                <TableCell>{n.Department}</TableCell>
                <TableCell>{n.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
