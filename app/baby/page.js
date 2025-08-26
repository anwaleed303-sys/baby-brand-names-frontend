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
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BabyForm from "../../components/forms/BabyForm";
import NameList from "../../components/results/NameList";
import Loading from "../../components/ui/Loading";
import { useNameGenerator } from "../../hooks/useNameGenerator";

export default function BabyNamesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { generateNames, loading, names, error } = useNameGenerator();

  const handleGenerate = async (formData) => {
    await generateNames("baby", formData);
  };

  return (
    <Container maxWidth="lg">
      <Fade in timeo ut={800}>
        <Box textAlign="center" mb={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <ChildCareIcon
              sx={{ fontSize: 48, color: "#f093fb", mr: { xs: 0, md: 2 } }}
            />
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Baby Names Generator
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
            Discover beautiful, meaningful names for your little one. Choose
            from Islamic, Hindu, Buddhist, and other cultural traditions.
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid
          sx={{
            backgroundColor: "transparent",
          }}
          item
          xs={12}
          md={4}
        >
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
              <BabyForm onGenerate={handleGenerate} loading={loading} />
            </Paper>
          </Fade>
        </Grid>

        {/* Results Section */}
        <Grid item xs={12} md={8}>
          <Fade in timeout={1200}>
            <Box>
              {loading && (
                <Box display="flex" justifyContent="center" py={8}>
                  <Loading message="Generating beautiful baby names..." />
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
                <NameList names={names} type="baby" />
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
                  <ChildCareIcon
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
                    Ready to find the perfect name?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    Fill out the form to generate beautiful, meaningful baby
                    names.
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
