import { Typography, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "1% 0",
      }}
    >
      <Typography variant={"h7"}>Created by Shane Gray &copy; 2021</Typography>
    </Box>
  );
};

export default Footer;
