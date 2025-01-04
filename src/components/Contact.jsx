import React from "react";
import { Container, Typography, Box, Link, IconButton } from "@mui/material";
import { keyframes } from "@mui/system";
import { Email, Phone, LinkedIn, GitHub, Instagram } from "@mui/icons-material";

// Animation for hover effect
const hoverEffect = keyframes`
  0% {
    color: #0078ff;
  }
  50% {
    color: #0056b3;
  }
  100% {
    color: #0078ff;
  }
`;

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        textAlign: "center",
        background: "linear-gradient(90deg, #6FB7FF, #A4C7FF)",
      }}
      className="p-5"
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          padding: "10px",
          border: "2px solid white", // Blue border
          color: "#2a1a8c", // Blue text color
          borderRadius: "8px",
          backgroundColor: "transparent", // Transparent background so text color stands out
          display: "inline",
        }}
      >
        Contact Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
        className="mt-5"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconButton
            href="mailto:mvasanth11102001@gmail.com"
            sx={{
              color: "#ffcc00",
              "&:hover": { animation: `${hoverEffect} 1s ease-in-out` },
            }}
          >
            <Email />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "1.1rem",
            }}
          >
            <Link
              href="mailto:mvasanth11102001@gmail.com"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              mvasanth11102001@gmail.com
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconButton
            href="tel:+919626542367"
            sx={{
              color: "#1E1E1E",
              "&:hover": { animation: `${hoverEffect} 1s ease-in-out` },
            }}
          >
            <Phone />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "1.1rem",
            }}
          >
            <Link
              href="tel:+919626542367"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              +91-9626542367
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconButton
            href="https://www.linkedin.com/in/vasantha-kumar-muthu/"
            target="_blank"
            sx={{
              color: "#0077B5",
              "&:hover": { animation: `${hoverEffect} 1s ease-in-out` },
            }}
          >
            <LinkedIn />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "1.1rem",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/vasantha-kumar-muthu/"
              target="_blank"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              LinkedIn Profile
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconButton
            href="https://github.com/11-10-01-Vasanth"
            target="_blank"
            sx={{
              color: "#181717",
              "&:hover": { animation: `${hoverEffect} 1s ease-in-out` },
            }}
          >
            <GitHub />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "1.1rem",
            }}
          >
            <Link
              href="https://github.com/11-10-01-Vasanth"
              target="_blank"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              GitHub Profile
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconButton
            href="https://www.instagram.com/vasanthakumar111001/"
            target="_blank"
            sx={{
              color: "#E4405F",
              "&:hover": { animation: `${hoverEffect} 1s ease-in-out` },
            }}
          >
            <Instagram />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: "#555",
              fontSize: "1.1rem",
            }}
          >
            <Link
              href="https://www.instagram.com/vasanthakumar111001/"
              target="_blank"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Instagram Profile
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
