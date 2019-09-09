import React from "react";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(6)
  }
}));

export function MainListItems() {
  const classes = useStyles();
  const [reportTabOpen, setReportTabOpen] = React.useState(false);
  const [formTabOpen, setFormTabOpen] = React.useState(false);
  function handleReportTabClick() {
    setReportTabOpen(!reportTabOpen);
    setFormTabOpen(false);
  }

  function handleFormTabClick() {
    setFormTabOpen(!formTabOpen);
    setReportTabOpen(false);
  }
  return (
    <div>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "#fdd835",
          textDecoration: "none"
        }}
        style={{
          textDecoration: "none",
          color: "#616161"
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>

      <NavLink
        to="/agents"
        activeStyle={{
          fontWeight: "bold",
          color: "#fdd835",
          textDecoration: "none"
        }}
        style={{
          textDecoration: "none",
          color: "#616161"
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Profiles" />
        </ListItem>
      </NavLink>

      <ListItem button onClick={handleReportTabClick}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {reportTabOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={reportTabOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink
            to="/query"
            activeStyle={{
              color: "#fdd835",
              textDecoration: "none"
            }}
            style={{
              textDecoration: "none",
              color: "#616161"
            }}
          >
            <ListItem button className={classes.nested}>
              <ListItemText primary="Data of Traffic" variant="body1" />
            </ListItem>
          </NavLink>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Nationality of Vessels" variant="body2" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Inward Container Traffic" variant="body2" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleFormTabClick}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Forms" />
        {formTabOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={formTabOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink
            to="/PilotageChit"
            activeStyle={{
              color: "#fdd835",
              textDecoration: "none"
            }}
            style={{
              textDecoration: "none",
              color: "#616161"
            }}
          >
            <ListItem button className={classes.nested}>
              <ListItemText primary="Pilotage Chit" variant="body2" />
            </ListItem>
          </NavLink>
          <NavLink
            to="/MastersDeclaration"
            activeStyle={{
              color: "#fdd835",
              textDecoration: "none"
            }}
            style={{
              textDecoration: "none",
              color: "#616161"
            }}
          >
            <ListItem button className={classes.nested}>
              <ListItemText primary="Masters Declaration" variant="body2" />
            </ListItem>
          </NavLink>
        </List>
      </Collapse>
    </div>
  );
}

export function SecondaryListItems() {
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year End" />
      </ListItem>
    </div>
  );
}
