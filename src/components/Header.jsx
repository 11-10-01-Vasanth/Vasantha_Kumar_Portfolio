import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sections = ["About", "Skills", "Projects", "Experience", "Contact"];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Fixed Header */}
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          padding: "10px 0",
          background: "linear-gradient(90deg, #2a1a8c, #6c63ff)", // New gradient colors
          transition: "background 0.3s ease",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side: Avatar and Title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={`${process.env.PUBLIC_URL}/PS209237.JPG`}
              alt="Vasantha Kumar M"
              sx={{
                width: 50,
                height: 50,
                marginRight: "15px",
                border: "2px solid #fff",
                animation: "rotateY 4s linear infinite",
                "@keyframes rotateY": {
                  "0%": { transform: "rotateY(0deg)" },
                  "100%": { transform: "rotateY(360deg)" },
                },
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                textTransform: "uppercase",
                color: "#F1F1F1",
                letterSpacing: "1px",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Vasantha Kumar M
            </Typography>
          </Box>

          {/* Right side: Hamburger Menu (Mobile) */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(!drawerOpen)}
              sx={{
                background: "linear-gradient(90deg, #2a1a8c, #6c63ff)",
              }}
            >
              {drawerOpen ? (
                <CloseIcon sx={{ color: "#FFEB3B", fontSize: "2rem" }} />
              ) : (
                <MenuIcon sx={{ color: "#FFEB3B", fontSize: "2rem" }} />
              )}
            </IconButton>
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {sections.map((section) => (
              <Button
                color="inherit"
                href={`#${section.toLowerCase()}`}
                key={section}
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginLeft: "20px",
                  padding: "10px 15px",
                  fontFamily: "Poppins, sans-serif",
                  transition: "color 0.3s ease, transform 0.2s ease",
                  color: "#F1F1F1",
                  "&:hover": {
                    color: "#FFEB3B", // Gold hover effect
                    transform: "scale(1.1)",
                  },
                }}
              >
                {section}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer for Fixed AppBar */}
      <Box sx={{ height: "64px" }} />

      {/* Mobile Drawer Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            paddingTop: "10px",
            backgroundColor: "#2a1a8c", // Darker side for mobile menu background
            color: "#F1F1F1",
            height: "100%",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              margin: "10px 0",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#FFEB3B", // Gold text color
            }}
          >
            Menu
          </Typography>
          <List>
            {sections.map((section) => (
              <ListItem
                button={true} // Explicitly define `button` as boolean
                component="a"
                href={`#${section.toLowerCase()}`}
                key={section}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFEB3B", // Gold hover effect
                    color: "#28313B",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ListItemText
                  primary={section}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      textAlign: "center",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
