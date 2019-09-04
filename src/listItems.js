import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
  <div>
    <NavLink
      to="/dashboard"
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
        <ListItemText primary="Agents" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/query"
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
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/forms"
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
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Forms" />
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
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
