import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "2%",
      }}
    >
      <Grid item md={1.1}>
        <Card>
          <CardMedia component="img" image="https://i.imgur.com/pjkXqOC.png" />
          <Typography variant="h5" textAlign="center">
            JavaScript
          </Typography>
        </Card>
      </Grid>
      <Grid item md={1.1}>
        <Card>
          <CardMedia component="img" image="https://i.imgur.com/2kpF1j2.png" />
          <Typography variant="h5" textAlign="center">
            MUI
          </Typography>
        </Card>
      </Grid>
      <Grid item md={1.1}>
        <Card>
          <CardMedia component="img" image="https://i.imgur.com/ucJvXjG.png" />
          <Typography variant="h5" textAlign="center">
            React
          </Typography>
        </Card>
      </Grid>
      <Grid item md={1.1}>
        <Card>
          <CardMedia component="img" image="https://i.imgur.com/WoUZSV2.png" />
          <Typography variant="h5" textAlign="center">
            HTML 5
          </Typography>
        </Card>
      </Grid>
      <Grid item md={1.1}>
        <Card>
          <CardMedia component="img" image="https://i.imgur.com/PJZobnL.png" />
          <Typography variant="h5" textAlign="center">
            GitHub
          </Typography>
        </Card>
      </Grid>
      <Grid item md={1.1}>
        <Card>
          <CardMedia
            component="img"
            image="https://i.imgur.com/cMZD5u0.jpg?1"
          />
          <Typography variant="h5" textAlign="center">
            Git Bash
          </Typography>
        </Card>
      </Grid>
      <Grid item md={1.1}>
        <Card>
          <CardMedia
            component="img"
            image="https://i.imgur.com/l9k6A5F.png?1"
          />
          <Typography variant="h5" textAlign="center">
            CSS 3
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Skills;
