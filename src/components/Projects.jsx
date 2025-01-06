import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

const projects = [
  {
    title: "Gameworld Platform",
    description:
      "Developed with React, Material-UI, Spring Boot, and PostgreSQL. Features game browsing and purchasing.",
  },
  {
    title: "Impact Bootstrap Template",
    description:
      "Responsive website template with Bootstrap, featuring navigation bars, carousels, and forms.",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        // padding: "80px 20px",
        background: "linear-gradient(90deg, #6FB7FF, #A4C7FF)",
        display: "flex",
        justifyContent: "center",
        color: "#fff",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%", textAlign: "center" }} className="mb-2 mt-3">
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
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center" className="mt-3 mb-4">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                elevation={5}
                sx={{
                  borderRadius: "15px",
                  padding: "30px",
                  backgroundColor: "#B7D3FF",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#2E3B4E",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#555",
                      lineHeight: 1.6,
                      fontSize: "1rem",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
