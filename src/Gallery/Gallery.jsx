import React, { useState, useEffect } from "react";
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
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";

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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevious = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex !== null) {
        if (event.key === "ArrowLeft") {
          setSelectedIndex(
            (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
          );
        } else if (event.key === "ArrowRight") {
          setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
        } else if (event.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <Container maxWidth="lg" sx={{ py: { md: 6, xs: 12 } }}>
      {/* Header */}
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
        {galleryImages.map((image, index) => (
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
              cursor: "pointer",
            }}
            onClick={() => setSelectedIndex(index)}
          >
            <CardMedia
              component="img"
              height="400"
              image={image.src}
              alt={image.title}
              sx={{
                transition: "transform 0.3s",
                borderRadius: "16px",
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
              }}
            />
          </Card>
        ))}
      </Box>

      {/* Enhanced Image Viewer with Carousel */}
      {selectedIndex !== null && (
        <Box
          {...swipeHandlers}
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
          onClick={(e) =>
            e.target === e.currentTarget && setSelectedIndex(null)
          }
        >
          <IconButton
            onClick={() => setSelectedIndex(null)}
            sx={{
              position: "absolute",
              top: 24,
              right: 24,
              color: "white",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              zIndex: 2,
            }}
            aria-label="Close gallery"
          >
            <Close fontSize="large" />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Navigation Arrows */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0,0,0,0.4)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                zIndex: 1,
              }}
              size="large"
              aria-label="Previous image"
            >
              <ArrowBackIos
                fontSize="large"
                sx={{ transform: "translateX(15%)" }}
              />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0,0,0,0.4)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                zIndex: 1,
              }}
              size="large"
              aria-label="Next image"
            >
              <ArrowForwardIos fontSize="large" />
            </IconButton>

            {/* Image Counter */}
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: 24,
                left: 24,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                px: 2,
                borderRadius: 2,
                zIndex: 1,
              }}
            >
              {selectedIndex + 1} / {galleryImages.length}
            </Typography>

            {/* Main Image */}
            <Box
              sx={{
                maxHeight: "80vh",
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].title}
                style={{
                  maxHeight: "80vh",
                  maxWidth: "100%",
                  borderRadius: 16,
                  boxShadow: theme.shadows[24],
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
}
