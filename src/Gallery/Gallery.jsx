import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ScissorsIcon from "@mui/icons-material/ContentCut";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop",
    title: "Balayage Highlights",
    description: "Natural sun-kissed look",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop",
    title: "Pixie Cut",
    description: "Modern short hairstyle",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop",
    title: "Bridal Updo",
    description: "Elegant wedding style",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?w=500&auto=format&fit=crop",
    title: "Ombre Coloring",
    description: "Smooth color transition",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&auto=format&fit=crop",
    title: "Beach Waves",
    description: "Casual textured look",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&auto=format&fit=crop",
    title: "Layered Cut",
    description: "Volume and movement",
  },
]; // Keep your existing image array

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: { md: 6, xs: 12 } }}>
      {/* Enhanced Header */}
      <Box textAlign="center" mb={6}>
        {/* <ScissorsIcon
          sx={{
            fontSize: 50,
            color: theme.palette.primary.main,
            mb: 2,
            transform: "rotate(180deg)",
          }} */}
        {/* /> */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "'Tangerine', cursive",
            fontSize: { md: "120px", xs: "65px" },
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
          Galerija
        </Typography>
        {/* <Typography
          variant="subtitle1"
          sx={{
            maxWidth: 700,
            mx: "auto",
            userSelect: "none",
            textShadow: `
              1px 1px 0 #000,
              -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000,
              2px 2px 3px rgba(0,0,0,0.5)
            `,
            fontSize: "1.1rem",
            letterSpacing: "0.5px",
          }}
        >
          Discover our masterpiece creations that transform beauty into art
        </Typography> */}
      </Box>

      {/* Enhanced Gallery Grid */}
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
        sx={{ px: isMobile ? 0 : 4 }}
      >
        {galleryImages.map((image) => (
          <Card
            key={image.id}
            sx={{
              position: "relative",
              overflow: "visible",
              borderRadius: 4,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: theme.shadows[6],
                "& .MuiCardMedia-root": {
                  transform: "scale(1.05)",
                },
              },
            }}
            onClick={() => setSelectedImage(image)}
          >
            <CardMedia
              component="img"
              height="400"
              image={image.src}
              alt={image.title}
              sx={{
                transition: "transform 0.3s",
                borderRadius: "16px",
                objectPosition: "top center",
              }}
            />
            {/* <CardContent
              sx={{
                bgcolor: theme.palette.background.paper,
                borderTop: `4px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: theme.palette.text.primary,
                }}
              >
                {image.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.6,
                }}
              >
                {image.description}
              </Typography>
            </CardContent> */}
          </Card>
        ))}
      </Box>

      {/* Enhanced Image Viewer */}
      {selectedImage && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 24,
              right: 24,
              color: "white",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Box
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              textAlign: "center",
              position: "relative",
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              style={{
                maxHeight: "70vh",
                maxWidth: "100%",
                borderRadius: 16,
                boxShadow: theme.shadows[24],
              }}
            />
            {/* <Box
              sx={{
                mt: 4,
                color: "white",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {selectedImage.title}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                {selectedImage.description}
              </Typography>
            </Box> */}
          </Box>
        </Box>
      )}
    </Container>
  );
}
