import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Box
      sx={{
        marginTop: { md: "100px", xs: "170px" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#f8f4e3",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Tangerine', cursive",
            fontSize: { md: "150px", xs: "65px" },
            mb: 2,
            userSelect: "none",
            textShadow: `
              2px 2px 0 #000,
              -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000,
              3px 3px 5px rgba(0,0,0,0.5)
            `,
          }}
        >
          Frizerski salon Arijana
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Tangerine', cursive",
            fontSize: { md: "70px", xs: "50px" },
            mb: 4,
            userSelect: "none",
            textShadow: `
              1px 1px 0 #000,
              -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000,
              2px 2px 3px rgba(0,0,0,0.5)
            `,
          }}
        >
          Ljepota je u svakoj vlasi
        </Typography>
        <Button
          component={Link}
          to="/o-nama"
          sx={{
            px: 3,
            py: 1,
            border: "2px solid #D2B48C",
            borderRadius: "30px",
            color: "#FFFFFF",
            fontFamily: "Eyesome",
            width: "200px",
            letterSpacing: "3px",
            marginTop: { xs: "150px", md: "30px" },
            fontSize: { md: "30px", xs: "20px" },
            transition: "all 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Added shadow for depth
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)", // Text shadow for better readability
            transform: "translateY(0)", // Initial state
            "&:hover": {
              backgroundColor: "#C19A6B",
              color: "#FFFFFF",
              transform: "translateY(-4px)", // More pronounced hover effect
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
            },
          }}
        >
          O nama
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
