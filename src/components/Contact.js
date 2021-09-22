import React from "react";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

const Contact = () => {
  return (
    <div>
      <Typography marginTop="5%" align="center" variant="h3">
        Contact Me
      </Typography>
      <Paper
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "5% 40%",
          padding: "50px 0",
        }}
      >
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/shanegray394/"
          sx={{
            margin: "1% 90%",
          }}
          variant="contained"
          startIcon={<LinkedInIcon />}
        >
          LinkedIN
        </Button>
        <Button
          target="_blank"
          href="https://twitter.com/Shane_the_Gray"
          sx={{
            margin: "1% 90%",
          }}
          variant="contained"
          startIcon={<TwitterIcon />}
        >
          Twitter
        </Button>
        <Button
          target="_blank"
          href="https://github.com/Shane-Gray394"
          sx={{
            margin: "1% 90%",
          }}
          variant="contained"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </Paper>
    </div>
  );
};

export default Contact;
