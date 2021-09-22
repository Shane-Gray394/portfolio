import React from "react";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          textAlign: "center",
          margin: "100px 50px",
          padding: "50px 0px",
        }}
      >
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/shanegray394/"
          sx={{
            margin: "10px 200px",
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
            margin: "10px 200px",
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
            margin: "10px 200px",
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
