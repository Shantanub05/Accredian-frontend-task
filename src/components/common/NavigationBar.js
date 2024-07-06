import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../assets/logo.png"; // Import the logo image

const NavigationBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 10, xl: 12 },
          py: 1,
          boxShadow: "0 4px 2px -2px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          minHeight: "80px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={logo}
              alt="accredian logo"
              style={{ height: "60px", width: "auto" }}
            />
            <Button
              aria-controls="courses-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              endIcon={<ExpandMoreIcon />}
              sx={{
                textTransform: "none",
                color: "#fff",
                backgroundColor: "#007bff",
                marginLeft: "24px",
                borderRadius: "4px",
                padding: "12px 24px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              Courses
            </Button>
            <Menu
              id="courses-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Data Science</MenuItem>
              <MenuItem onClick={handleMenuClose}>Product Management</MenuItem>
              <MenuItem onClick={handleMenuClose}>General Management</MenuItem>
              <MenuItem onClick={handleMenuClose}>HR Analytics</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sales and Marketing</MenuItem>
              <MenuItem onClick={handleMenuClose}>
                Digital Transformation
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                Operations & Supply Chain Management
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                padding: "8px 16px",
                mx: 2,
              }}
              color="inherit"
            >
              Refer & Earn
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                padding: "8px 16px",
                mx: 2,
              }}
              color="inherit"
            >
              Resources
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                padding: "8px 16px",
                mx: 2,
              }}
              color="inherit"
            >
              About us
            </Button>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button
              sx={{
                backgroundColor: "#e0e0e0",
                color: "#000",
                marginRight: "8px",
                textTransform: "none",
                fontSize: "1rem",
                padding: "8px 16px",
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                padding: "8px 16px",
              }}
              variant="contained"
              color="primary"
            >
              Try for free
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            {[
              "Refer & Earn",
              "Benefits",
              "FAQs",
              "Support",
              "Login",
              "Try for free",
            ].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} sx={{ textTransform: "none" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationBar;
