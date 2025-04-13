import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ScheduleIcon from "@mui/icons-material/Schedule";

function ContactHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
        py: 2,
        overflow: "hidden",
        marginTop: { md: "110px", xs: "0px" },
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
      {/* <Typography
        variant="h1"
        sx={{
          fontSize: { md: "5.5rem", xs: "3rem" },
          margin: "3rem 0 6rem 0",
          fontFamily: "Tangerine, cursive",
          color: "#f8f4e3",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          transition: "transform 0.3s ease",
          zIndex: 1,
          p: "0.5rem 2rem",
          borderRadius: "50px",
          letterSpacing: "15px",
          userSelect: "none",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Kako do nas?
      </Typography> */}

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
            {/* <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <PersonIcon sx={{ fontSize: "28px", color: "#f8f4e3" }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", mb: 0.5 }}
                >
                  Vlasnica
                </Typography>
                <Typography variant="body1">Arijana Petrović</Typography>
              </Box>
            </Box> */}

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
            title="Salon Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.5637823006995!2d16.706891669648943!3d44.97912809819187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4767334e71a3a2c5%3A0xfd32f38f4dc8ac94!2sMajora%20Milana%20Tepi%C4%87a%205%2C%20Prijedor%2079101!5e0!3m2!1shr!2sba!4v1743880627966!5m2!1shr!2sba"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactHome;
