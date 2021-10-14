import React from "react";
import {
  Typography,
  CardMedia,
  Card,
  Box,
  CardActionArea,
  CardContent,
} from "@mui/material";

const Projects = () => {
  return (
    <div>
      <Typography marginTop="2%" align="center" variant="h3">
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
            backgroundColor: "primary.main",
          }}
        >
          <CardContent
            style={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
              color="#eee5e9"
            >
              Mobile Weather App
            </Typography>
            <CardActionArea
              href="https://mobile-weather.vercel.app/"
              target="_blank"
            >
              <CardMedia
                component="img"
                image="https://i.imgur.com/ZwkD5U5.png"
              ></CardMedia>
            </CardActionArea>
          </CardContent>
        </Card>
        <Card
          sx={{
            margin: "5% 5%",
            height: "50vh",
            width: "25%",
            backgroundColor: "primary.main",
          }}
        >
          <CardMedia></CardMedia>
        </Card>
        <Card
          sx={{
            margin: "5% 5%",
            height: "50vh",
            width: "25%",
            backgroundColor: "primary.main",
          }}
        >
          <CardMedia></CardMedia>
        </Card>
      </Box>
    </div>
  );
};

export default Projects;
