import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Button } from "@mui/material";
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
        <Button
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "linear-gradient(90deg, #2a1a8c, #6c63ff)",
            color: "white",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            "&:hover": {
              backgroundColor: "#005bb5",
            },
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      )}
    </div>
  );
};

export default App;
