import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, Instagram } from "@mui/icons-material";

// Animation for hover effect
const iconHoverEffect = {
  transition: "transform 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
};

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        textAlign: "center",
        background: "linear-gradient(90deg, #6FB7FF, #A4C7FF)",
        padding: "3rem 1rem",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          padding: "10px",
          border: "2px solid white",
          color: "#2a1a8c",
          borderRadius: "8px",
          backgroundColor: "transparent",
          display: "inline",
        }}
      >
        Contact me
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
        className="mb-5 mt-5"
      >
        {/* Email */}
        <Box sx={{ textAlign: "center" }}>
          <Tooltip title="Email Me" arrow>
            <IconButton
              href="mailto:mvasanth11102001@gmail.com"
              sx={{
                backgroundColor: "#D93025", // Gmail red color
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#B1271B", // Slightly darker red on hover
                  transform: "scale(1.1)", // Add scaling effect
                  transition: "all 0.3s ease",
                },
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            >
              <Email />
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="mailto:mvasanth11102001@gmail.com"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Email
            </Link>
          </Typography>
        </Box>

        {/* Phone */}
        <Box sx={{ textAlign: "center" }}>
          <Tooltip title="Call Me" arrow>
            <IconButton
              href="tel:+919626542367"
              sx={{
                backgroundColor: "#28a745", // Green color
                color: "#fff", // White icon color
                ...iconHoverEffect,
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            >
              <Phone />
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="tel:+919626542367"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Phone
            </Link>
          </Typography>
        </Box>

        {/* LinkedIn */}
        <Box sx={{ textAlign: "center" }}>
          <Tooltip title="Visit LinkedIn Profile" arrow>
            <IconButton
              href="https://www.linkedin.com/in/vasantha-kumar-muthu/"
              target="_blank"
              sx={{
                backgroundColor: "#0077B5",
                color: "#fff",
                ...iconHoverEffect,
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/vasantha-kumar-muthu/"
              target="_blank"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              LinkedIn
            </Link>
          </Typography>
        </Box>

        {/* GitHub */}
        <Box sx={{ textAlign: "center" }}>
          <Tooltip title="Visit GitHub Profile" arrow>
            <IconButton
              href="https://github.com/11-10-01-Vasanth"
              target="_blank"
              sx={{
                backgroundColor: "#181717",
                color: "#fff",
                ...iconHoverEffect,
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            >
              <GitHub />
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="https://github.com/11-10-01-Vasanth"
              target="_blank"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              GitHub
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
