import React, { useState, useEffect, useRef } from "react";
import { Paper, Card, Typography, CardMedia, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import WAVES from "vanta/dist/vanta.waves.min";
import Skills from "./Skills";
import mypic from "../assets/mypic.jpg";

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
          color: 0x540b0e,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} style={{ width: "auto" }}>
      <Grid container justifyContent={"space-evenly"}>
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
              src={mypic}
            />
          </Card>
        </Grid>
        <Grid item lg={6} md={5} xs={10}>
          <Paper
            sx={{
              height: "30vh",
              padding: "3% 0",
              textAlign: "center",
              margin: "5% 0",
              backgroundColor: "primary.main",
              color: "text.main",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              color={"text.main"}
              sx={{
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              About Me
            </Typography>
            <Typography
              sx={{
                padding: "3% 0",
              }}
              variant="p"
              component="p"
              color={"text.main"}
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
              color={"text.main"}
            >
              I'm currently attending Bloom Institute of Technology (formerly
              Lambda School) for Full Stack Web Development. This site as you
              see it is made from everything I've learned thus far, at any given
              point. It will be updated throughout my time here, as I learn
              more.
            </Typography>
          </Paper>
        </Grid>
        {matches && <Skills />}
      </Grid>
    </div>
  );
};

export default Home;
