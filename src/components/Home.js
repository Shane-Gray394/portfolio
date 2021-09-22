import React from "react";
import { Paper } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
      }}
    >
      <Card
        sx={{
          margin: "10% 0",
          borderRadius: "1%",
          width: "45%",
        }}
      >
        <CardMedia
          sx={{
            borderRadius: "1%",
            width: "100%",
          }}
          component="img"
          src="https://i.imgur.com/GNnCMwf.jpg"
        />
      </Card>
      <Paper
        sx={{
          height: "30vh",
          padding: "3% 3%",
          textAlign: "center",
          margin: "10% 0",
          width: "45%",
          backgroundColor: "#7C7C7C",
          color: "#eee5e9",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            padding: "3% 3%",
          }}
          variant="p"
          component="p"
        >
          My name is Shane Gray, and I'm a web developer from La Grange,
          Kentucky.
        </Typography>
        <Typography
          sx={{
            padding: "3% 3%",
          }}
          variant="p"
          component="p"
        >
          I'm currently attending Lambda School for Full Stack Web Development.
          This site as you see it is made from everything I've learned thus far,
          at any given point. It will be updated throughout my time here, as I
          learn more.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
