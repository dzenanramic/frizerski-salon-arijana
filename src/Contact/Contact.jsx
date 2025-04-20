import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        marginBottom: { xs: "30px", md: "60px" },
        marginTop: { md: "70px", xs: "50px" },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "90%",
          padding: { xs: "20px", md: "60px" },
          borderRadius: "30px",
          minHeight: "500px",
          background: "linear-gradient(105deg, #4a4a4a, #1f1f1f)",
          gap: { xs: "30px", md: "60px" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: "transparent",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 2, md: 4 },
            py: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "Tangerine, cursive",
              fontSize: { xs: "50px", md: "60px" },
            }}
          >
            Kako do nas?
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <LocationOnIcon sx={{ fontSize: "28px", color: "#f8f4e3" }} />

              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Adresa:
              </Typography>
              <Typography variant="body1">
                Majora Milana Tepića 5, Prijedor 79101
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <PhoneIcon sx={{ fontSize: "28px", color: "#f8f4e3" }} />

              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Telefon
              </Typography>
              <Typography variant="body1">+387 65 318 287</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexDirection: { xs: "column", md: "row" },
                textDecoration: "none",
                color: "#f8f4e3",
              }}
            >
              <FaInstagram size="28px" style={{ color: "#f8f4e3" }} />
              <Typography
                component="a"
                href="https://www.instagram.com/frizerski_salon_arijana"
                target="_blank"
                rel="noopener noreferrer"
                zIndex={100}
                sx={{
                  textDecoration: "none",
                  color: "#f8f4e3",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              >
                @frizerski_salon_arijana
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <EmailIcon sx={{ fontSize: "28px", color: "#f8f4e3" }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Email
              </Typography>
              <Typography variant="body1">
                arijana.kurtovic@gmail.com
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "15px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <ScheduleIcon sx={{ fontSize: "28px", color: "#f8f4e3" }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Radno vrijeme
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1">
                  Ponedjeljak – Petak: 9:00 – 17:00
                </Typography>
                <Typography variant="body1">Subota: 9:00 – 14:00</Typography>
                <Typography variant="body1">Nedjelja: Zatvoreno</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            minHeight: { xs: "100px", md: "400px" },
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.4506033670827!2d16.70496047624763!3d44.97912807107015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476733638b59108f%3A0x2ce61e580a0b80e1!2sFrizerski%20salon%20Arijana!5e1!3m2!1shr!2sba!4v1745156996938!5m2!1shr!2sba"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
