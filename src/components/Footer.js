import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "2% 0",
        backgroundColor: "primary.main",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={"h7"} sx={{ color: "#eee5e9" }}>
        Created by Shane Gray &copy; 2021
      </Typography>
    </Box>
  );
};

export default Footer;
