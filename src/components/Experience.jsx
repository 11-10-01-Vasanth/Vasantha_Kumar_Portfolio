import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { keyframes } from "@mui/system";
import { FaRegCheckCircle } from "react-icons/fa"; // Importing a check-circle icon
import { IoMdCode } from "react-icons/io"; // Importing a code icon
import { BsPersonLinesFill } from "react-icons/bs";

const experience = [
  {
    title: "Junior Full Stack Developer",
    company: "Mathy ExamsDaily Private Limited",
    period: "Aug 2023 - Oct 2024",
    responsibilities: [
      "Built responsive front-end using Quasar Framework.",
      "Developed secure back-end services with Spring Boot.",
      "Optimized application performance and scalability.",
    ],
  },
];

// Animation for timeline item hover effect
const hoverEffect = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Experience = () => {
  return (
    <>
      <div id="experience">
        <Box
          sx={{
            backgroundColor: "#f3f4f6",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="d-none d-lg-block"
        >
          <Grid
            container
            justifyContent="center"
            sx={{
              padding: "50px 20px",
              textAlign: "center",
              background: "linear-gradient(90deg, #6FB7FF, #A4C7FF)",
              // boxShadow: "0 4px 8px #00c6ff",
            }}
            spacing={4}
          >
            <Grid item xs={12}>
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
                Work Experience
              </Typography>
              <Timeline
                position="alternate"
                sx={{ padding: "0" }}
                className="mt-5"
              >
                {experience.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: "#2a1a8c" }}>
                        <BsPersonLinesFill size={20} />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "#2a1a8c" }} />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        padding: { xs: "20px", sm: "25px" },
                        marginTop: "60px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        marginBottom: "20px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                        backgroundColor: "#B7D3FF",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#2E3B4E",
                          marginBottom: "12px",
                          fontSize: { xs: "1.2rem", sm: "1.5rem" },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          fontStyle: "italic",
                          marginBottom: "15px",
                        }}
                      >
                        {item.company} ({item.period})
                      </Typography>
                      <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                        {item.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            {idx === 0 && (
                              <IoMdCode
                                size={20}
                                style={{
                                  marginRight: "10px",
                                  color: "#2a1a8c",
                                }}
                              />
                            )}
                            {idx === 1 && (
                              <FaRegCheckCircle
                                size={20}
                                style={{
                                  marginRight: "10px",
                                  color: "#2a1a8c",
                                }}
                              />
                            )}
                            {idx === 2 && (
                              <IoMdCode
                                size={20}
                                style={{
                                  marginRight: "10px",
                                  color: "#2a1a8c",
                                }}
                              />
                            )}
                            <Typography variant="body2" sx={{ color: "#555" }}>
                              {responsibility}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Box>
        <Box className="d-block d-lg-none">
          <Grid
            container
            sx={{
              textAlign: "center",
              background: "linear-gradient(90deg, #6FB7FF, #A4C7FF)",
              padding: "20px",
            }}
            spacing={4}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  color: "#2a1a8c",
                  padding: "10px 20px",
                  border: "2px solid white",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  display: "inline-block",
                }}
              >
                Work Experience
              </Typography>
            </Grid>
            {experience.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#B7D3FF",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    textAlign: "start",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#2E3B4E",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontStyle: "italic",
                      marginBottom: "15px",
                    }}
                  >
                    {item.company} ({item.period})
                  </Typography>
                  <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    {item.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        {idx === 0 && (
                          <IoMdCode
                            size={20}
                            style={{ marginRight: "10px", color: "#2a1a8c" }}
                          />
                        )}
                        {idx === 1 && (
                          <FaRegCheckCircle
                            size={20}
                            style={{ marginRight: "10px", color: "#2a1a8c" }}
                          />
                        )}
                        {idx === 2 && (
                          <IoMdCode
                            size={20}
                            style={{ marginRight: "10px", color: "#2a1a8c" }}
                          />
                        )}
                        <Typography variant="body2" sx={{ color: "#555" }}>
                          {responsibility}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Experience;
