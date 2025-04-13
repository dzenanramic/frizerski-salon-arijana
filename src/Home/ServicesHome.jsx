import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const cards = [
  { id: 1, image: "/sisanje.png", alt: "Hair cutting service" },
  { id: 2, image: "/stiliziranje.png", alt: "Hair styling service" },
  { id: 3, image: "/farbanje.png", alt: "Hair coloring service" },
  { id: 4, image: "/tretmani.png", alt: "Hair treatments" },
];

function ServicesHome() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
        py: 8,
        overflow: "hidden",
        marginTop: { md: "110px", xs: "0px" },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          //         background: `
          //   linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%),
          //   linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)
          // `,
          zIndex: 0,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "50px", md: "60px" },
          margin: "3rem 0 6rem 0",
          fontFamily: "Tangerine, cursive",
          color: "#f8f4e3",
          transition: "transform 0.3s ease",
          fontWeight: "bold",
          zIndex: 1,
          textShadow: `
              1px 1px 0 #000,
              -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000,
              2px 2px 3px rgba(0,0,0,0.5)
            `,
          p: "0.5rem 2rem",
          borderRadius: "50px",
          letterSpacing: "7px",
          userSelect: "none",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Usluge
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 4 },
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          maxWidth: "1400px",
          zIndex: 1,
          py: 2,
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            sx={{
              width: { xs: "90%", md: "22%" },
              height: { xs: "280px", md: "380px" },
              maxWidth: "320px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
              transition:
                "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transform: hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
              animation: `${floatAnimation} 4s ease-in-out infinite`,
              animationDelay: `${card.id * 0.2}s`,
              "&:hover": { boxShadow: "0 15px 40px -5px rgba(0, 0, 0, 0.4)" },
            }}
          >
            {/* <CardActionArea sx={{ height: "100%" }}> */}
            <CardMedia
              component="img"
              image={card.image}
              alt={card.alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                transform: hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
              }}
            />
            {/* </CardActionArea> */}
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ServicesHome;
