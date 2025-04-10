import React from "react";
import {
  Box,
  Typography,
  Container,
  Avatar,
  Card,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Person, Spa, Style } from "@mui/icons-material";
import { motion } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Arijana sluša svaki moj zahtjev i svaki put ih ispuni!",
    name: "Sarah R.",
    role: "Redovna klijentica (5+ godina)",
  },
  {
    id: 2,
    quote:
      "Najbolja frizerka ikad. Toliko posvećena i predana svojim klijentima!",
    name: "Džejla R.",
    role: "Klijentica",
  },
  {
    id: 3,
    quote: "Profesionalizam na najvišem nivou. Uvijek izađem zadovoljna!",
    name: "Ema B.",
    role: "Klijentica (3 godine)",
  },
];

// Features data
const features = [
  {
    title: "Personalizirana usluga",
    desc: "Individualna pažnja za vaš jedinstveni stil i potrebe.",
    icon: <Person color="inherit" sx={{ fontSize: 40, mb: 2 }} />,
  },
  {
    title: "Stručnost u trendovima",
    desc: "Savladavanje najnovijih šišanja, boja i tehnika u industriji.",
    icon: <Style color="primary" sx={{ fontSize: 40, mb: 2 }} />,
  },
  {
    title: "Premium proizvodi",
    desc: "Koristimo samo nježne, visokokvalitetne proizvodi za vašu kosu.",
    icon: <Spa color="success" sx={{ fontSize: 40, mb: 2 }} />,
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

// Styled components
const HeroSection = styled(Paper)(({ theme }) => ({
  backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  textAlign: "center",
}));

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <HeroSection
        sx={{
          backgroundColor: "transparent",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              {/* Avatar */}
              <motion.div variants={fadeInUp}>
                <Avatar
                  src="/hero.jpg"
                  alt="Arijana"
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    border: `4px solid ${theme.palette.grey[300]}`,
                    flexShrink: 0,
                  }}
                />
              </motion.div>

              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h1"
                    fontFamily={"'Tangerine', cursive"}
                    sx={{
                      fontSize: { xs: "3.5rem", md: "5.5rem" },
                      mb: 2,
                      textShadow: `1px 1px 0 ${theme.palette.common.black}`,
                      fontWeight: 700,
                    }}
                    gutterBottom
                  >
                    Upoznajte Arijanu
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Bio Section */}
      <Container
        sx={{
          py: 8,
          background: "linear-gradient(105deg, #4a4a4a, #1f1f1f)",
          borderRadius: "30px",
          mt: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "20px", md: "30px" },
              padding: { xs: "20px", md: "30px" },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "'Tangerine', cursive",
                fontSize: { xs: "3rem", md: "4rem" },
                color: theme.palette.common.white,
              }}
            >
              Zdravo, ja sam Arijana!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.grey[300],
                fontSize: { xs: "16px", md: "19px" },
              }}
            >
              Sa više od 10 godina iskustva u frizerstvu, posvetila sam svoju
              karijeru pomaganju klijentima da se osjećaju samopouzdano i
              lijepo. Moje putovanje je počelo kada sam otkrila ljubav prema
              transformaciji kose u umjetnička djela.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.grey[300],
                fontSize: { xs: "16px", md: "19px" },
              }}
            >
              U mom salonu, vjerujem da svaka posjeta treba biti opuštajuća,
              personalizirana i da ćete zavoljeti svoj izgled!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontStyle: "italic",
                color: theme.palette.grey[100],
                fontSize: { xs: "16px", md: "19px" },
              }}
            >
              "Vaša sreća je moje remek-djelo."
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Why Choose Me Section */}
      <Box sx={{ py: 8 }}>
        <Container
          sx={{
            background: "linear-gradient(105deg, #4a4a4a, #1f1f1f)",
            py: 8,
            paddingBottom: { xs: 10, md: 12 },
            borderRadius: "30px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 700,
                fontFamily: "'Tangerine', cursive",
                fontSize: { xs: "3rem", md: "4rem" },
                textShadow: `1px 1px 0 ${theme.palette.common.black}`,
                color: "white",
                mb: 4,
              }}
            >
              Zašto izabrati mene?
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 3, sm: 2 },
              justifyContent: "center",
              alignItems: "stretch", // Ensure cards stretch to same height
            }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  flex: "1", // Allow each card to take equal width
                  width: "100%", // Ensure all cards take up equal space
                  maxWidth: "400px", // Set a max-width for large screens
                  display: "flex",
                  justifyContent: "center",
                  padding: { xs: 0, sm: 2 },
                }}
              >
                <Card
                  sx={{
                    height: "100%", // Ensure all cards have the same height
                    width: "100%", // Ensure all cards have the same width
                    textAlign: "center",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "20px",
                    background: "linear-gradient(105deg, #C19A6B, #B5865D)",

                    backgroundBlendMode: "multiply",
                    opacity: 0.95,
                    color: "black",
                    boxShadow: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: { xs: "none", sm: "scale(1.05)" },
                    },
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "black",
                      fontSize: "1.2rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      color: "black",
                      opacity: 0.9,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container
        sx={{
          py: 8,
          background: "linear-gradient(105deg, #4a4a4a, #1f1f1f)",
          borderRadius: "30px",
          mt: 4,
          mb: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "white",
              fontFamily: "'Tangerine', cursive",
              fontSize: { xs: "3rem", md: "4rem" },
            }}
          >
            Šta moji klijenti kažu
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", md: "stretch" }, // 👈 This centers children on mobile
            gap: 4,
            mt: 4,
            mb: { xs: 1, md: 4 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                flex: 1,
                maxWidth: 320,
                minWidth: 280,
                width: "100%",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "20px",
                  background: "linear-gradient(105deg, #C19A6B, #B5865D)",

                  backgroundBlendMode: "multiply",
                  opacity: 0.95,
                  color: "black",
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="body1" fontStyle="italic" paragraph>
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  — {testimonial.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {testimonial.role}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
