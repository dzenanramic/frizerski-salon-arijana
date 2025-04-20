import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "2rem 0",
        position: "relative",
        borderRadius: "16px",
        bottom: 0,
        margin: "auto",
        width: "97.5%",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box sx={{ maxWidth: "90%", margin: "0 auto", px: 2 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} Frizerski Salon Arijana. All rights
          reserved.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.875rem",
            "& a": {
              color: "#80cbc4",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          }}
        >
          Izrada i održavanje sajta{" "}
          <Link
            href="https://lightcit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Light & ConsulITing
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
