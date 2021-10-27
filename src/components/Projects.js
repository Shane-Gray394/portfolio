import React from "react";
import {
  Typography,
  CardMedia,
  Card,
  CardContent,
  Grid,
  Button,
  ButtonGroup,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div>
      <Typography margin="2% 0" align="center" variant="h3">
        My Projects
      </Typography>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item lg={3} md={7} sm={9} xs={11}>
          <Card
            sx={{
              margin: "5% 0",
              // height: "25%",
              backgroundColor: "primary.main",
            }}
          >
            <CardContent
              style={{
                backgroundColor: "primary.main",
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  paddingBottom: "10px",
                }}
                color="#eee5e9"
              >
                Mobile Weather App
              </Typography>
              <CardMedia
                component="img"
                image="https://i.imgur.com/ZwkD5U5.png"
                sx={{ height: "50vh", borderRadius: ".5%" }}
              />
              <ButtonGroup sx={{ paddingTop: "3%" }}>
                <Button
                  href="https://mobile-weather.vercel.app/"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                >
                  Check it Out
                </Button>
                <Button
                  href="https://github.com/Shane-Gray394/weather"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  endIcon={<GitHubIcon />}
                >
                  The Repo
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} md={7} sm={9} xs={11}>
          <Card
            sx={{
              margin: "5% 0",
              backgroundColor: "primary.main",
            }}
          >
            <CardContent
              style={{
                backgroundColor: "primary.main",
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  paddingBottom: "10px",
                }}
                color="#eee5e9"
              >
                Potluck Planner
              </Typography>
              <CardMedia
                component="img"
                image="https://i.imgur.com/b3xtZlc.png"
                sx={{ height: "50vh", borderRadius: ".5%" }}
              />
              <ButtonGroup sx={{ paddingTop: "3%" }}>
                <Button
                  href="https://potluck-planner-6.vercel.app/"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                >
                  Check it Out
                </Button>
                <Button
                  href="https://github.com/bw-fr-potluck-planner-6/front-end"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  endIcon={<GitHubIcon />}
                >
                  The Repo
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} md={7} sm={9} xs={11}>
          <Card
            sx={{
              margin: "5% 0",
              backgroundColor: "primary.main",
            }}
          >
            <CardContent
              style={{
                backgroundColor: "primary.main",
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  paddingBottom: "10px",
                }}
                color="#eee5e9"
              >
                To Be Determined
              </Typography>
              <CardMedia
                component="img"
                image="https://i.imgur.com/QpVWVW1.png"
                sx={{ height: "50vh", borderRadius: ".5%" }}
              />
              <ButtonGroup sx={{ paddingTop: "3%" }}>
                <Button
                  href=""
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                >
                  Check it Out
                </Button>
                <Button
                  href=""
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  endIcon={<GitHubIcon />}
                >
                  The Repo
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
