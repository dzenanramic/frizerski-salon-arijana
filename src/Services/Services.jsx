import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Palette, Brush, Spa, Wash, Chair, Timer } from "@mui/icons-material";
import { motion } from "framer-motion";
import ScissorsIcon from "@mui/icons-material/ContentCut";

// Service data
const services = [
  {
    id: 1,
    title: "Žensko šišanje",
    description: "Moderni i klasični stilovi šišanja",
    duration: "60 min",
    price: "10 - 20 KM",
    icon: <ScissorsIcon color="primary" />,
  },
  {
    id: 2,
    title: "Muško šišanje",
    description: "Precizno šišanje sa detaljnim dotjerivanjem",
    duration: "45 min",
    price: "10 -15 KM",
    icon: <ScissorsIcon color="primary" />,
  },
  {
    id: 3,
    title: "Farbanje kose",
    description: "Profesionalno farbanje sa premium proizvodima",
    duration: "120 min",
    price: "80-120 KM",
    icon: <Palette color="primary" />,
  },
  {
    id: 4,
    title: "Balayage/Ombré",
    description: "Prirodni efekti suncem osvijetljene kose",
    duration: "180 min",
    price: "150-200 KM",
    icon: <Brush color="primary" />,
  },
  {
    id: 5,
    title: "Njega kose",
    description: "Dubinska regeneracija i hidratacija",
    duration: "90 min",
    price: "60 KM",
    icon: <Spa color="primary" />,
  },
  {
    id: 6,
    title: "Pranje i styling",
    description: "Profesionalno pranje sa savijanjem ili feniranjem",
    duration: "60 min",
    price: "35 KM",
    icon: <Wash color="primary" />,
  },
];

// Categories
const serviceCategories = [
  {
    title: "Osnovne usluge",
    icon: <Chair color="inherit" />,
    services: [1, 2, 6],
  },
  {
    title: "Premium usluge",
    icon: <Spa color="inherit" />,
    services: [3, 4, 5],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        overflowX: "hidden",
        py: 13,
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Box textAlign="center" mb={10}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Tangerine', cursive",
                  fontWeight: 700,
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
                  // Ensures proper character rendering
                  fontFeatureSettings: '"liga" 1, "calt" 1',
                }}
              >
                Naše Usluge
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
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
                Pružamo širok spektar profesionalnih usluga za njegu i
                stilizaciju kose koristeći najkvalitetnije proizvode
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Services by Category */}
      <Container maxWidth="lg">
        {serviceCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
          >
            <Box
              sx={{
                mb: 8,
                background: "linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)",
                borderRadius: "40px",
                p: { xs: 3, md: 5 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                mb={4}
                sx={{ color: "white", position: "relative" }}
              >
                <Box
                  sx={{
                    p: 2,
                    background: "linear-gradient(105deg, #C19A6B, #B5865D)",
                    borderRadius: "50%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    lineHeight: 0,
                  }}
                >
                  {React.cloneElement(category.icon, {
                    fontSize: "large",
                    sx: { color: "white" },
                  })}
                </Box>
                <Typography
                  variant="h3"
                  fontFamily="'Tangerine', cursive"
                  sx={{
                    fontSize: { xs: "3rem", md: "4rem" },
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {category.title}
                </Typography>
              </Box>

              <Divider
                sx={{
                  bgcolor: "rgba(255,255,255,0.3)",
                  mb: 4,
                  height: "2px",
                  borderRadius: "2px",
                }}
              />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  },
                  gap: 4,
                }}
              >
                {services
                  .filter((service) => category.services.includes(service.id))
                  .map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          p: 3,
                          height: "300px",
                          borderRadius: "20px",
                          background:
                            "linear-gradient(135deg, #C19A6B 0%, #B5865D 100%)",
                          color: theme.palette.text.primary,
                          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          overflow: "visible",
                          position: "relative",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 16px 32px rgba(0,0,0,0.2)",
                          },
                          "&:before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: "20px",
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                            pointerEvents: "none",
                          },
                        }}
                      >
                        <Box display="flex" alignItems="center" gap={2} mb={3}>
                          <Box
                            sx={{
                              p: 2,
                              background: "rgba(255,255,255,0.15)",
                              borderRadius: "14px",
                              lineHeight: 0,
                              backdropFilter: "blur(5px)",
                              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            }}
                          >
                            {React.cloneElement(service.icon, {
                              sx: {
                                fontSize: "40px",
                                color: "white",
                              },
                            })}
                          </Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              flexGrow: 1,
                              letterSpacing: "-0.5px",
                              color: "rgba(255,255,255,0) 100%",
                              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Box>

                        <Typography
                          variant="body1"
                          paragraph
                          sx={{
                            color: "rgba(255,255,255,0) 100%",
                            minHeight: "72px",
                            lineHeight: 1.6,
                          }}
                        >
                          {service.description}
                        </Typography>

                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mt={3}
                          sx={{
                            pt: 3,
                            borderTop: "1px solid rgba(255,255,255,0.2)",
                            alignItems: "center",
                          }}
                        >
                          <Box display="flex" alignItems="center" gap={1.5}>
                            <Timer
                              fontSize="small"
                              sx={{ color: "rgba(255,255,255,0) 100%" }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: "rgba(255,255,255,0) 100%",
                              }}
                            >
                              {service.duration}
                            </Typography>
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 800,
                              fontSize: "1.3rem",
                              letterSpacing: "-0.5px",
                              color: "rgba(255,255,255,0) 100%",
                              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          >
                            {service.price}
                          </Typography>
                        </Box>
                      </Card>
                    </motion.div>
                  ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Container>

      {/* Additional Info */}
      <Container sx={{ mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "30px",
              background: "linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)",
              width: { xs: "87%", md: "94.4%" },
              color: "white",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 16px 32px rgba(0,0,0,0.2)",
              "&:before": {
                content: '""',
                position: "absolute",
                top: "-50%",
                left: "-50%",
                right: "-50%",
                bottom: "-50%",
                background:
                  "linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.08) 50%, transparent 55%)",
                animation: "shine 8s infinite linear",
              },
            }}
          >
            <Box position="relative" zIndex={1}>
              <Typography
                variant="h4"
                fontFamily="'Great vibes', cursive"
                sx={{
                  fontSize: { xs: "3rem", md: "3.5rem" },
                  mb: 3,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                Vaše zadovoljstvo naš je prioritet
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                Svaku uslugu prilagođavamo vašim potrebama i željama. Radimo sa
                vrhunskim proizvodima koji njeguju vašu kosu dok postižete
                željeni izgled.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.95rem",
                }}
              >
                *Cijene su informativne i mogu varirati ovisno o dužini i stanju
                kose
              </Typography>
            </Box>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
