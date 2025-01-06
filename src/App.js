import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show or hide the scroll-to-top button
  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {showScroll && (
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "linear-gradient(90deg, #2a1a8c, #6c63ff)", // Custom gradient
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow
            "&:hover": {
              backgroundColor: "#005bb5", // Hover color
            },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </div>
  );
};

export default App;
