import React from "react";
import { Typography, Box } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "2% 0",
      }}
    >
      <Typography variant={"h7"} sx={{ textAlign: "center" }}>
        Created by Shane Gray &copy; 2021
      </Typography>
    </Box>
  );
};

export default Footer;
