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
          color: 0x383d3b,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef}>
      <Typography padding={"1.5% 0"} align="center" variant="h3">
        My Projects
      </Typography>
      <Grid container justifyContent={"space-evenly"}>
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
