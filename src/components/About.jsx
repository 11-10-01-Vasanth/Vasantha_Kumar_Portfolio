import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const About = () => {
  const title = "Aspiring Java Full-Stack Developer";

  return (
    <Box
      id="about"
      sx={{
        background: "linear-gradient(90deg, #6FB7FF, #A4C7FF)", // Soft blue to light gradient
        color: "#333", // Darker text for better readability on light background
        padding: { xs: "40px 20px", sm: "60px 30px", md: "80px 40px" },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Circles for Background Design */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "100px", md: "150px" },
          height: { xs: "100px", md: "150px" },
          background: "#fff",
          opacity: 0.1,
          borderRadius: "50%",
          top: "-30px",
          left: "-30px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: "150px", md: "200px" },
          height: { xs: "150px", md: "200px" },
          background: "#fff",
          opacity: 0.1,
          borderRadius: "50%",
          bottom: "-50px",
          right: "-50px",
        }}
      />

      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          color: "#2a1a8c", // Darker color for text
        }}
      >
        {title.split("").map((letter, index) => (
          <Box
            component="span"
            key={index}
            sx={{
              display: "inline-block",
              animation: "jump 1s infinite",
              animationDelay: `${index * 0.1}s`,
              "@keyframes jump": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-2px)",
                },
              },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </Box>
        ))}
      </Typography>

      {/* Decorative Divider */}
      <Divider
        sx={{
          width: "80px",
          height: "4px",
          background: "#FFEB3B", // Golden yellow for emphasis
          margin: "20px auto",
          borderRadius: "2px",
        }}
      />

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          lineHeight: 1.6,
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.3)", // Lighter translucent background
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          animation: "fadeIn 2s 0.5s",
          animationFillMode: "both",
          color: "#333", // Text color for the description
        }}
      >
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "-20px",
            left: "-30px",
            color: "#FFEB3B", // Gold icon color
            fontSize: "2.5rem",
            opacity: 0.8,
          }}
        >
          <FormatQuoteIcon
            sx={{ fontSize: "3rem", transform: "rotate(180deg)" }}
          />
        </Box>
        <b>
          Passionate about creating impactful, innovative solutions with a
          strong foundation in Java full-stack development. Eager to contribute
          to dynamic teams and grow my skills while building scalable and
          user-friendly applications.
        </b>
        <Box
          component="span"
          sx={{
            position: "absolute",
            bottom: "-20px",
            right: "-30px",
            color: "#FFEB3B", // Gold icon color
            fontSize: "2.5rem",
            opacity: 0.8,
          }}
        >
          <FormatQuoteIcon sx={{ fontSize: "3rem" }} />
        </Box>
      </Typography>
    </Box>
  );
};

export default About;
