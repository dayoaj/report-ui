import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <React.Fragment>
      <IconButton
        // aria-owns={open ? "menu-appbar" : null}
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
