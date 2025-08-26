"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = "md",
  fullWidth = true,
  showCloseButton = true,
  ...props
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={isMobile}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: isMobile ? 0 : 3,
        },
      }}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(5px)",
        },
      }}
      {...props}
    >
      {title && (
        <DialogTitle
          sx={{
            color: "white",
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            pb: 2,
            mb: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          {showCloseButton && (
            <IconButton
              onClick={onClose}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      <DialogContent
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          "&::-webkit-scrollbar": {
            width: 8,
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(255, 255, 255, 0.5)",
          },
        }}
      >
        {children}
      </DialogContent>

      {actions && (
        <DialogActions
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            pt: 2,
            mt: 2,
          }}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}
