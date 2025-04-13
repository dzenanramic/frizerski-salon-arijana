import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./Header.css";
import { Link } from "react-router-dom";

const pages = ["O nama", "Usluge", "Galerija", "Kontakt"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="header"
      sx={{
        background: "linear-gradient(to right, #333333, #555555)",
        height: "80px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              component={Link}
              to="/"
              sx={{
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="/Arijana.png"
                alt="logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            {/* <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Tangerine",
                fontWeight: 700,
                fontSize: "40px",
                letterSpacing: "3px",
                color: "#f8f4e3",
                textDecoration: "none",
                "&:hover": {
                  color: "#C19A6B",
                },
              }}
            >
              Arijana
            </Typography> */}
          </Box>

          {/* Mobile menu */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(210, 180, 140, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  background: "linear-gradient(to bottom, #444444, #666666)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(210, 180, 140, 0.2)",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={`/${page.toLowerCase().replace(/\s+/g, "-")}`}
                    sx={{
                      textDecoration: "none",
                      color: "#f8f4e3",
                      width: "100%",
                      fontFamily: "Tangerine",
                      fontSize: "25px",
                      fontWeight: 500,
                      "&:hover": {
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "8px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s+/g, "-")}`}
                sx={{
                  my: 2,
                  color: "#f8f4e3",
                  border: "none",
                  display: "block",
                  fontFamily: "Tangerine",
                  fontSize: "30px",
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                  letterSpacing: "1.5px",
                  "&:hover": {
                    backgroundColor: "#C19A6B",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    color: "#FFFFFF",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
