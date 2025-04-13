import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const services = [
  {
    title: "Neodoljiva čokolada",
    image: "/chocolate.jpg",
    alt: "Chocolate hair style",
  },
  {
    title: "Evergreen pramenovi",
    image: "/pramenovi.jpg",
    alt: "Evergreen hair highlights",
  },
  {
    title: "Egzotične afro vibracije",
    image: "/afro.jpg",
    alt: "Afro hairstyle",
  },
  {
    title: "Pletenice za sve situacije",
    image: "/pletenice.jpg",
    alt: "Braided hairstyles",
  },
];

function GalleryHome() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#D2B48C",
        py: 4,
        px: 2,
      }}
    >
      {services.map((service, index) => (
        <Card
          key={index}
          sx={{
            width: 700,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          {/* <CardActionArea> */}
          <CardMedia
            component="img"
            height="600"
            image={service.image}
            alt={service.alt}
            sx={{
              objectFit: "cover",
            }}
          />
          <CardContent
            sx={{
              backgroundColor: "#D2B48C",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 600,
                color: "#5C4033",
                // textTransform: "uppercase",
                letterSpacing: 1.2,
              }}
            >
              {service.title}
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
        </Card>
      ))}
    </Box>
  );
}

export default GalleryHome;
