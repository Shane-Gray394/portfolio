import React, { useState, useEffect, useRef } from "react";
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
import WAVES from "vanta/dist/vanta.waves.min";
import backend from "../assets/backend.png";
import plants from "../assets/plants.png";
import potluck from "../assets/potluck.png";

const Projects = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x540b0e,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} style={{ height: "auto" }}>
      <Grid
        container
        columns={11}
        justifyContent={"space-evenly"}
        alignContent={"center"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowGap={4}
        sx={{ padding: "2.2% 0" }}
      >
        <Grid item lg={3} md={4} sm={6} xs={10}>
          <Card
            sx={{
              backgroundColor: "primary.main",
              margin: "0 1%",
            }}
            elevation={10}
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
                  paddingBottom: "2%",
                }}
                color={"text.main"}
              >
                Potluck Planner
              </Typography>
              <CardMedia
                component="img"
                image={potluck}
                sx={{
                  height: "20vh",
                  borderRadius: ".5%",
                  objectPosition: "center top",
                }}
              />
              <ButtonGroup sx={{ paddingTop: "3%" }}>
                <Button
                  href="https://potluck-planning.vercel.app/"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                >
                  <Typography color={"text.main"}>Check it Out</Typography>
                </Button>
                <Button
                  href="https://github.com/Shane-Gray394/front-end-1"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                  endIcon={
                    <GitHubIcon
                      sx={{
                        color: "text.main",
                      }}
                    />
                  }
                >
                  <Typography color={"text.main"}>The Repo</Typography>
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={10}>
          <Card
            sx={{
              backgroundColor: "primary.main",
              margin: "0 1%",
            }}
            elevation={10}
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
                  paddingBottom: "2%",
                }}
                color={"text.main"}
              >
                Anywhere Fitness API
              </Typography>
              <CardMedia
                component="img"
                image={backend}
                sx={{
                  height: "20vh",
                  borderRadius: ".5%",
                  objectPosition: "center top",
                }}
              />
              <ButtonGroup sx={{ paddingTop: "3%" }}>
                <Button
                  href="https://anywhere-fitness-back-end-2021.herokuapp.com/"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                >
                  <Typography color={"text.main"}>Check it Out</Typography>
                </Button>
                <Button
                  href="https://github.com/anywhere-fitness-2-bw-ft/back-end"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                  endIcon={
                    <GitHubIcon
                      sx={{
                        color: "text.main",
                      }}
                    />
                  }
                >
                  <Typography color={"text.main"}>The Repo</Typography>
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={10}>
          <Card
            sx={{
              backgroundColor: "primary.main",
              margin: "0 1%",
            }}
            elevation={10}
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
                  paddingBottom: "2%",
                }}
                color={"text.main"}
              >
                Water My Plants
              </Typography>
              <CardMedia
                component="img"
                image={plants}
                sx={{
                  height: "20vh",
                  borderRadius: ".5%",
                  objectPosition: "center top",
                }}
              />
              <ButtonGroup sx={{ paddingTop: "3%" }}>
                <Button
                  href="https://front-end-ijg2273o2-shane-gray394.vercel.app/"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                >
                  <Typography color={"text.main"}>Check it Out</Typography>
                </Button>
                <Button
                  href="https://github.com/build-week-ft-water-my-plants-4/front-end"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                  endIcon={
                    <GitHubIcon
                      sx={{
                        color: "text.main",
                      }}
                    />
                  }
                >
                  <Typography color={"text.main"}>The Repo</Typography>
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={10}>
          <Card
            sx={{
              backgroundColor: "primary.main",
              margin: "0 1%",
            }}
            elevation={10}
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
                  paddingBottom: "2%",
                }}
                color={"text.main"}
              >
                Mobile Weather App
              </Typography>
              <CardMedia
                component="img"
                image="https://i.imgur.com/ZwkD5U5.png"
                sx={{
                  height: "20vh",
                  borderRadius: ".5%",
                  objectPosition: "center top",
                }}
              />
              <ButtonGroup sx={{ paddingTop: "3%" }}>
                <Button
                  href="https://mobile-weather.vercel.app/"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                >
                  <Typography color={"text.main"}>Check it Out</Typography>
                </Button>
                <Button
                  href="https://github.com/Shane-Gray394/weather"
                  target="_blank"
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ textAlign: "center" }}
                  endIcon={
                    <GitHubIcon
                      sx={{
                        color: "text.main",
                      }}
                    />
                  }
                >
                  <Typography color={"text.main"}>The Repo</Typography>
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
