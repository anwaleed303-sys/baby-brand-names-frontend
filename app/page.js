"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import {
//   Baby as BabyIcon,
//   Business as BusinessIcon,
//   Star as StarIcon,
//   Language as LanguageIcon,
//   Psychology as PsychologyIcon,
//   Favorite as FavoriteIcon,
// } from "@mui/icons-material";
import { Business, Business as BusinessIcon } from "@mui/icons-material";
import ChildCareIcon from "@mui/icons-material/ChildCare"; // baby alternative
// import WorkIcon from "@mui/icons-material/Work"; // business alternative
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Link from "next/link";

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: "AI-Powered",
      description: "Advanced AI generates unique, meaningful names",
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
      title: "Multi-Cultural",
      description: "Islamic, Hindu, Buddhist and modern names",
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: "Meaningful",
      description: "Every name comes with deep meaning and origin",
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: "Personalized",
      description: "Customized based on your preferences",
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Fade in timeout={1000}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(135deg, #fff 0%, #f0f4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              mb: 3,
            }}
          >
            Baby & Brand Name Generator
          </Typography>

          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Generate beautiful, meaningful names for babies and brands with AI.
            Islamic, cultural names with deep significance, and modern brand
            names that stand out.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<ChildCareIcon />}
              component={Link}
              href="/baby"
              sx={{
                color: "white",
                // border: "1px solid rgba(255, 255, 255, 0.5)", // 👈 Added border
                px: 4,
                py: 2,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                backgroundColor: "transparent", // 👈 if you want it similar to outlined
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Generate Baby Names
            </Button>

            <Button
              variant="contained"
              size="large"
              startIcon={<Business />}
              component={Link}
              href="/brand"
              sx={{
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.5)",
                px: 4,
                py: 2,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Generate Brand Names
            </Button>
          </Box>
        </Box>
      </Fade>

      {/* Features Section */}
      <Grid container spacing={4} mb={8}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Fade in timeout={1200 + index * 200}>
              <Card
                className="glass card-hover"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  height: "100%",
                  textAlign: "center",
                  py: 3,
                  background:
                    hoveredCard === index
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredCard === index ? "translateY(-5px)" : "none",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      color: "white",
                      mb: 2,
                      transform:
                        hoveredCard === index ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "white", fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>

      {/* CTA Section */}
      <Fade in timeout={2000}>
        <Card
          className="glass"
          sx={{
            textAlign: "center",
            py: 6,
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Start Generating Names Today
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Choose from thousands of meaningful names with cultural
              significance or create unique brand names that resonate with your
              audience.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/baby"
                sx={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  // boxShadow: "0 8px 25px rgba(240, 147, 251, 0.4)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 35px rgba(240, 147, 251, 0.6)",
                  },
                }}
              >
                Baby Names
              </Button>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/brand"
                sx={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow: "0 8px 25px rgba(79, 172, 254, 0.4)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 35px rgba(79, 172, 254, 0.6)",
                  },
                }}
              >
                Brand Names
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Container>
  );
}
