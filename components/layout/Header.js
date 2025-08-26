"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
  useMediaQuery,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ChildCare as ChildCareIcon,
  Business as BusinessIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
  ChildCare,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  // Add error handling for useLanguage
  let language = "en";
  let setLanguage = () => {};
  let t = (key) => key;

  try {
    const languageContext = useLanguage();
    language = languageContext.language;
    setLanguage = languageContext.setLanguage;
    t = languageContext.t;
  } catch (error) {
    console.error("Language context error:", error);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (event) => {
    console.log("Changing language to:", event.target.value);
    setLanguage(event.target.value);
  };

  const menuItems = [
    { text: t("home"), icon: <HomeIcon />, href: "/" },
    { text: t("babyNames"), icon: <ChildCare />, href: "/baby" },
    { text: t("brandNames"), icon: <BusinessIcon />, href: "/brand" },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            component={Link}
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              {isMobile ? "Name Generator" : "Name Generator"}
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  href={item.href}
                  startIcon={item.icon}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Language Selector & Mobile Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* <FormControl size="small">
              <Select
                value={language}
                onChange={handleLanguageChange}
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.3)", // default border
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.5)", // hover border
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent", // focus border transparent
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white", // dropdown arrow color
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "white",
                      "& .MuiMenuItem-root": {
                        color: "black",
                      },
                    },
                  },
                }}
              >
                <MenuItem value="en">🇺🇸 EN</MenuItem>
                <MenuItem value="ur">🇵🇰 اردو</MenuItem>
                <MenuItem value="ar">🇸🇦 عربي</MenuItem>
              </Select>
            </FormControl> */}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
