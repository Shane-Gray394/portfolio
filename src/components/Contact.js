import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  Button,
  Typography,
  Grid,
  TextField,
  ButtonGroup,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DescriptionIcon from "@mui/icons-material/Description";
import WAVES from "vanta/dist/vanta.waves.min";

const Contact = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = () => {
    copyTextToClipboard("shane.dalton.gray@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      String("mailto:shane.dalton.gray^gmail.com").replace("^", "@"),
      "_self"
    );
  };

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
    <div ref={myRef}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        columnSpacing={4}
        sx={{ height: "80vh" }}
      >
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <Paper
            sx={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "primary.main",
              height: "40vh",
            }}
          >
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/shanegray394/"
              sx={{
                margin: "1% 90%",
                maxWidth: "500px",
                maxHeight: "50px",
                minWidth: "140px",
                minHeight: "40px",
              }}
              variant="contained"
              startIcon={
                <LinkedInIcon
                  sx={{
                    color: "text.main",
                  }}
                />
              }
              color="secondary"
            >
              <Typography color={"text.main"}>LinkedIn</Typography>
            </Button>
            <Button
              target="_blank"
              href="https://github.com/Shane-Gray394"
              sx={{
                margin: "1% 90%",
                maxWidth: "500px",
                maxHeight: "50px",
                minWidth: "140px",
                minHeight: "40px",
              }}
              variant="contained"
              startIcon={
                <GitHubIcon
                  sx={{
                    color: "text.main",
                  }}
                />
              }
              color="secondary"
            >
              <Typography color={"text.main"}>GitHub</Typography>
            </Button>
            <Button
              target="_blank"
              href="https://twitter.com/Shane_the_Gray"
              sx={{
                margin: "1% 90%",
                maxWidth: "500px",
                maxHeight: "50px",
                minWidth: "140px",
                minHeight: "40px",
              }}
              variant="contained"
              startIcon={
                <TwitterIcon
                  sx={{
                    color: "text.main",
                  }}
                />
              }
              color="secondary"
            >
              <Typography color={"text.main"}>Twitter</Typography>
            </Button>

            <Button
              href="https://docs.google.com/document/d/1eQWS-g4Ze0B4YtK5YmNFScb46QunMcKAzSSEG7xZlKs/edit?usp=sharing"
              target="_blank"
              sx={{
                margin: "1% 90%",
                maxWidth: "500px",
                maxHeight: "50px",
                minWidth: "140px",
                minHeight: "40px",
              }}
              variant="contained"
              startIcon={
                <DescriptionIcon
                  sx={{
                    color: "text.main",
                  }}
                />
              }
              color="secondary"
            >
              <Typography color={"text.main"}>Resume</Typography>
            </Button>
            <ButtonGroup sx={{ margin: "1% 0" }}>
              <Button
                onClick={handleSubmit}
                sx={{
                  maxHeight: "50px",
                  minHeight: "40px",
                }}
                variant="contained"
                startIcon={
                  <EmailIcon
                    sx={{
                      color: "text.main",
                    }}
                  />
                }
                color="secondary"
              >
                <Typography color={"text.main"}>Email</Typography>
              </Button>

              <TextField
                type="text"
                value={"shane.dalton.gray@gmail.com"}
                readOnly
                sx={{ display: "none" }}
              />
              <Button
                sx={{
                  maxHeight: "50px",
                  minHeight: "40px",
                }}
                onClick={handleCopyClick}
                variant="contained"
                color="secondary"
                startIcon={<ContentCopyIcon sx={{ color: "text.main" }} />}
              >
                <Typography>{isCopied ? "Copied!" : "Copy"}</Typography>
              </Button>
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
