import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={"h7"} color={"text.main"}>
        Created by Shane Gray &copy; 2021
      </Typography>
    </Box>
  );
};

export default Footer;
