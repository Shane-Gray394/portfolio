import React, { useState, useEffect, useRef } from "react";
import { Paper, Card, Typography, CardMedia, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import WAVES from "vanta/dist/vanta.waves.min";
import Skills from "./Skills";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
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
      <Grid container justifyContent={"space-evenly"} pb={2}>
        <Grid item lg={3} md={5} sm={7} xs={10}>
          <Card
            sx={{
              margin: "5% 0",
              borderRadius: "1%",
              height: "55vh",
            }}
          >
            <CardMedia
              sx={{
                height: "100%",
                objectPosition: "center top",
              }}
              component="img"
              src="https://i.imgur.com/3qRLaMw.jpg"
            />
          </Card>
        </Grid>
        <Grid item lg={6} md={5} xs={10}>
          <Paper
            sx={{
              height: "30vh",
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
              learned thus far, at any given point. It will be updated
              throughout my time here, as I learn more.
            </Typography>
          </Paper>
        </Grid>
        {matches ? <Skills /> : ""}
      </Grid>
    </div>
  );
};

export default Home;
