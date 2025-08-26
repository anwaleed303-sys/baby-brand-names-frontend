"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Business as BusinessIcon } from "@mui/icons-material";
import ChildCareIcon from "@mui/icons-material/ChildCare"; // Baby alternative
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"; // Business alternative
import LanguageIcon from "@mui/icons-material/Language";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import NextLink from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        mt: "auto",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Name Generator AI
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Generate beautiful, meaningful names for babies and brands with
              AI. Supporting Islamic, Hindu, Buddhist, and modern naming
              traditions.
            </Typography>
            <Box>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": { color: "white" },
                }}
                onClick={() => {
                  window.open("https://github.com/letswithAi", "_blank");
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": { color: "white" },
                }}
                onClick={() => {
                  window.location.href = "mailto:waleedancoding@gmail.com";
                }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": { color: "white" },
                }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/waleed-an-02204a316/",
                    "_blank"
                  );
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "white", fontWeight: 600 }}
            >
              {t("quickLinks")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                component={NextLink}
                href="/"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { color: "white" },
                }}
              >
                <PsychologyIcon sx={{ fontSize: 16 }} />
                {t("home")}
              </Link>
              <Link
                component={NextLink}
                href="/baby"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { color: "white" },
                }}
              >
                <ChildCareIcon sx={{ fontSize: 16 }} />
                {t("babyNames")}
              </Link>
              <Link
                component={NextLink}
                href="/brand"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { color: "white" },
                }}
              >
                <BusinessIcon sx={{ fontSize: 16 }} />
                {t("brandNames")}
              </Link>
            </Box>
          </Grid>

          {/* Features */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "white", fontWeight: 600 }}
            >
              {t("features")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                • AI-Powered Generation
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                • Cultural & Religious Names
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                • Meaningful & Unique
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                • Multi-Language Support
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                • Mobile Optimized
              </Typography>
            </Box>
          </Grid>

          {/* Languages
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "white",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <LanguageIcon />
              {t("languages")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                🇺🇸 English
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                🇵🇰 اردو (Urdu)
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                🇸🇦 عربي (Arabic)
              </Typography>
            </Box>
          </Grid> */}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            © {currentYear} Name Generator AI. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "white" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "white" },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "white" },
              }}
            >
              Contact
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
