import React from "react";
import { Paper, Card, Typography, CardMedia, Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container justifyContent={"space-evenly"} mt={7}>
      <Grid item lg={4} md={5} xs={10}>
        <Card
          sx={{
            margin: "5% 0",
            borderRadius: "1%",
            height: "70vh",
          }}
        >
          <CardMedia
            sx={{
              height: "100%",
            }}
            component="img"
            src="https://i.imgur.com/3qRLaMw.jpg"
          />
        </Card>
      </Grid>
      <Grid item lg={6} md={5} xs={10}>
        <Paper
          sx={{
            height: "25vh",
            padding: "3% 3%",
            textAlign: "center",
            margin: "5% 0",
            backgroundColor: "primary.main",
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
            I'm currently attending Lambda School for Full Stack Web
            Development. This site as you see it is made from everything I've
            learned thus far, at any given point. It will be updated throughout
            my time here, as I learn more.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
