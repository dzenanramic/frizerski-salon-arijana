import React from "react";
import Box from "@mui/material/Box";
import LandingPage from "./LandingPage";
import ServicesHome from "./ServicesHome";
import ContactHome from "./ContactHome";

function Home() {
  return (
    // <Box sx={{ position: "relative" }}>
    //   {/* Background wrapper */}
    //   <Box
    //     sx={{
    //       position: "fixed",
    //       top: 0,
    //       left: 0,
    //       width: "100vw",
    //       height: "100vh",
    //       backgroundImage: "url('landing.jpeg')",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       zIndex: -1, // Send to back
    //     }}
    //   />

    //   {/* Content container */}
    <Box sx={{ position: "relative" }}>
      <LandingPage />
      <ServicesHome />
      <ContactHome />
    </Box>
    // </Box>
  );
}

export default Home;
