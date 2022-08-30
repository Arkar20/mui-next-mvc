import { Box, Typography, Snackbar } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "primary.dark",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        style={{ display: "grid", placeItems: "center", color: "white" }}
      >
        Built with Next.js &copy;2021
      </Typography>
    </Box>
  );
};

export { Footer };
