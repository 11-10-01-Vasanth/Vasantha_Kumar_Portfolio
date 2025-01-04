import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { keyframes } from "@mui/system";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGithub,
  FaJava,
} from "react-icons/fa"; // react-icons library
import { SiSpringboot, SiPostgresql } from "react-icons/si"; // react-icons library
import { GiClover } from "react-icons/gi"; // react-icons library

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "QuasarVue.js", icon: <FaReact size={40} /> }, // Using React icon for QuasarVue.js (a JS framework)
  { name: "ReactJs", icon: <FaReact size={40} /> },
  { name: "C", icon: <GiClover size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> }, // Java icon (from react-icons)
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "Git & GitHub", icon: <FaGithub size={40} /> },
];

// Animation for card hover effect
const hoverEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        background: "linear-gradient(90deg, #6FB7FF, #A4C7FF)", // Light blue gradient for the background
        color: "#2E3B4E", // Darker text for better readability
        padding: { xs: "40px 20px", sm: "60px 30px", md: "80px 40px" },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          marginBottom: "40px",
          padding: "10px", // Adds padding around the text
          border: "2px solid #fff", // White border
          color: "#2a1a8c", // Dark text color
          borderRadius: "8px", // Rounded corners
          backgroundColor: "transparent", // Transparent background
        }}
        style={{ display: "inline" }}
      >
        Technical Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center" className="mt-4 mb-3">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Card
              elevation={3}
              sx={{
                borderRadius: "12px",
                animation: `${hoverEffect} 1.5s ease-in-out infinite`,
                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s, transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: "#B7D3FF", // Light blue background for the card
                  color: "#2E3B4E", // Dark text for better readability
                  fontFamily: "Poppins, sans-serif",
                  borderRadius: "12px 12px 0 0",
                }}
              >
                <Box sx={{ marginBottom: "15px" }}>
                  {skill.icon} {/* Display the corresponding icon */}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    fontSize: "1.1rem",
                    color: "#2E3B4E", // Dark text color for skill names
                  }}
                >
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
