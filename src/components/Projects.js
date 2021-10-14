import React from "react";
import {
  Typography,
  CardMedia,
  Card,
  Box,
  CardActionArea,
} from "@mui/material";

const Projects = () => {
  return (
    <div>
      <Typography marginTop="5%" align="center" variant="h3">
        My Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row",
        }}
      >
        <Card
          sx={{
            margin: "5% 5%",
            height: "50vh",
            width: "25%",
          }}
        >
          <CardActionArea
            href="https://mobile-weather.vercel.app/"
            target="_blank"
          >
            <CardMedia
              component="img"
              image="https://i.imgur.com/ZwkD5U5.png"
            ></CardMedia>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            margin: "5% 5%",
            height: "50vh",
            width: "25%",
          }}
        >
          <CardMedia></CardMedia>
        </Card>
        <Card
          sx={{
            margin: "5% 5%",
            height: "50vh",
            width: "25%",
          }}
        >
          <CardMedia></CardMedia>
        </Card>
      </Box>
    </div>
  );
};

export default Projects;
