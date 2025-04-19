import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Properly import images using Vite's asset handling
const imageModules = import.meta.glob("/src/assets/images/0*.jpg", {
  eager: true,
});

const galleryImages = Object.values(imageModules).map((module, index) => ({
  id: index + 1,
  src: module.default,
  title: `Image ${index + 1}`,
  description: `Description for Image ${index + 1}`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: { md: 6, xs: 12 } }}>
      {/* Header remains the same */}
      <Box textAlign="center" mb={6}>
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
      </Box>

      {/* Gallery Grid */}
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
          </Card>
        ))}
      </Box>

      {/* Image Viewer Modal */}
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
          </Box>
        </Box>
      )}
    </Container>
  );
}
