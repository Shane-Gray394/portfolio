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
            backgroundColor: "#383D3B",
          }}
        >
          <CardContent
            style={{
              backgroundColor: "#383D3B",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
                color: "white",
              }}
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
