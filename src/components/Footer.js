import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "absolute",
        bottom: "0",
        width: "100%",
        paddingBottom: "0.3%",
      }}
    >
      <Typography variant={"h8"} color={"text.main"} fontSize={13}>
        Created by Shane Gray &copy; 2021
      </Typography>
    </Box>
  );
};

export default Footer;
