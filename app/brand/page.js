"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { Business as BusinessIcon } from "@mui/icons-material";
import BrandForm from "../../components/forms/BrandForm";
import NameList from "../../components/results/NameList";
import Loading from "../../components/ui/Loading";
import { useNameGenerator } from "../../hooks/useNameGenerator";

export default function BrandNamesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { generateNames, loading, names, error } = useNameGenerator();

  const handleGenerate = async (formData) => {
    await generateNames("brand", formData);
  };

  return (
    <Container maxWidth="lg">
      <Fade in timeout={800}>
        <Box textAlign="center" mb={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <BusinessIcon
              sx={{ fontSize: 48, color: "#4facfe", mr: { xs: 0, md: 2 } }}
            />
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Brand Names Generator
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Create unique, memorable brand names that stand out in the market.
            Perfect for startups, products, and businesses.
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={4}>
          <Fade in timeout={1000}>
            <Paper
              className="glass"
              sx={{
                p: 3,
                height: "fit-content",
                position: "sticky",
                top: 20,
                backgroundColor: "transparent",
              }}
            >
              <BrandForm onGenerate={handleGenerate} loading={loading} />
            </Paper>
          </Fade>
        </Grid>

        {/* Results Section */}
        <Grid item xs={12} md={8}>
          <Fade in timeout={1200}>
            <Box>
              {loading && (
                <Box display="flex" justifyContent="center" py={8}>
                  <Loading message="Creating unique brand names..." />
                </Box>
              )}

              {error && (
                <Paper
                  className="glass"
                  sx={{
                    p: 3,
                    textAlign: "center",
                    background: "rgba(244, 67, 54, 0.1)",
                    border: "1px solid rgba(244, 67, 54, 0.3)",
                  }}
                >
                  <Typography color="error" variant="h6">
                    {error}
                  </Typography>
                </Paper>
              )}

              {names.length > 0 && !loading && (
                <NameList names={names} type="brand" />
              )}

              {names.length === 0 && !loading && !error && (
                <Paper
                  className="glass"
                  sx={{
                    p: 6,
                    textAlign: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <BusinessIcon
                    sx={{
                      fontSize: 64,
                      color: "rgba(255, 255, 255, 0.5)",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 1 }}
                  >
                    Ready to create your brand?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    Fill out the form to generate unique, memorable brand names.
                  </Typography>
                </Paper>
              )}
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
}
