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
                color: "#fff", // White icon color
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#B1271B", // Slightly darker Gmail red
                  transform: "scale(1.1)", // Add scaling effect on hover
                  transition: "all 0.3s ease", // Smooth transition
                },
                animation: "emailGlow 2s ease-in-out infinite", // Glowing effect
                "@keyframes emailGlow": {
                  "0%": { boxShadow: "0 0 8px 4px rgba(217, 48, 37, 0.3)" },
                  "50%": { boxShadow: "0 0 15px 8px rgba(217, 48, 37, 0.6)" },
                  "100%": { boxShadow: "0 0 8px 4px rgba(217, 48, 37, 0.3)" },
                },
              }}
            >
              <Email sx={{ color: "#fff" }} /> {/* White Email icon */}
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#D93025", // Matches Gmail red
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="mailto:mvasanth11102001@gmail.com"
              sx={{
                color: "#D93025", // Matches Gmail red for consistency
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline", // Underline on hover for better visibility
                },
              }}
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
                backgroundColor: "#28a745", // Green button color
                color: "#fff", // Icon color
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#218838", // Slightly darker green on hover
                  transform: "scale(1.1)", // Add scaling effect
                  transition: "all 0.3s ease",
                },
                animation: "professionalGlow 2s ease-in-out infinite", // Glow effect
                "@keyframes professionalGlow": {
                  "0%": { boxShadow: "0 0 8px 4px rgba(40, 167, 69, 0.3)" },
                  "50%": { boxShadow: "0 0 15px 8px rgba(40, 167, 69, 0.6)" },
                  "100%": { boxShadow: "0 0 8px 4px rgba(40, 167, 69, 0.3)" },
                },
              }}
            >
              <Phone sx={{ color: "#fff" }} /> {/* White phone icon */}
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#28a745", // Green color matching the button
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="tel:+919626542367"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline", // Subtle underline effect on hover
                },
              }}
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
                backgroundColor: "#0077B5", // LinkedIn's brand color
                color: "#fff", // White icon color
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#005582", // Darker LinkedIn color for hover effect
                  transform: "scale(1.1)", // Add scaling effect
                  transition: "all 0.3s ease",
                },
                animation: "linkedinGlow 2s ease-in-out infinite", // Glowing effect
                "@keyframes linkedinGlow": {
                  "0%": { boxShadow: "0 0 8px 4px rgba(0, 119, 181, 0.3)" },
                  "50%": { boxShadow: "0 0 15px 8px rgba(0, 119, 181, 0.6)" },
                  "100%": { boxShadow: "0 0 8px 4px rgba(0, 119, 181, 0.3)" },
                },
              }}
            >
              <LinkedIn sx={{ color: "#fff" }} /> {/* White LinkedIn icon */}
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#0077B5", // Matches LinkedIn brand color
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/vasantha-kumar-muthu/"
              target="_blank"
              sx={{
                color: "#0077B5", // Matches LinkedIn brand color for consistency
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline", // Underline on hover for better visibility
                },
              }}
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
                backgroundColor: "#181717", // GitHub's brand color
                color: "#fff", // White icon color
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#0d0d0d", // Slightly darker color for hover effect
                  transform: "scale(1.1)", // Add scaling effect
                  transition: "all 0.3s ease", // Smooth transition
                },
                animation: "githubGlow 2s ease-in-out infinite", // Glowing effect
                "@keyframes githubGlow": {
                  "0%": { boxShadow: "0 0 8px 4px rgba(24, 23, 23, 0.3)" },
                  "50%": { boxShadow: "0 0 15px 8px rgba(24, 23, 23, 0.6)" },
                  "100%": { boxShadow: "0 0 8px 4px rgba(24, 23, 23, 0.3)" },
                },
              }}
            >
              <GitHub sx={{ color: "#fff" }} /> {/* White GitHub icon */}
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#181717", // Matches GitHub's branding
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="https://github.com/11-10-01-Vasanth"
              target="_blank"
              sx={{
                color: "#181717", // Matches GitHub's brand color for consistency
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline", // Underline on hover for better visibility
                },
              }}
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
