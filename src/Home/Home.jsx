import React from "react";
import Box from "@mui/material/Box";
import LandingPage from "./LandingPage";
import ServicesHome from "./ServicesHome";
import ContactHome from "./ContactHome";

function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <LandingPage />
      <ServicesHome />
      <ContactHome />
    </Box>
    // </Box>
  );
}

export default Home;
