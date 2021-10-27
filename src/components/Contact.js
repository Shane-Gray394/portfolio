import React from "react";
import { Paper, Button, Typography, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div>
      <Typography marginTop="2%" align="center" variant="h3">
        Contact Me
      </Typography>
      <Grid container justifyContent={"center"}>
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <Paper
            sx={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "7.5% 0",
              backgroundColor: "primary.main",
              margin: "5% 0",
            }}
          >
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/shanegray394/"
              sx={{
                margin: "1% 90%",
                maxWidth: "500px",
                maxHeight: "50px",
                minWidth: "120px",
                minHeight: "30px",
              }}
              variant="contained"
              startIcon={<LinkedInIcon />}
              color="secondary"
            >
              LinkedIN
            </Button>
            <Button
              target="_blank"
              href="https://twitter.com/Shane_the_Gray"
              sx={{
                margin: "1% 90%",
                maxWidth: "500px",
                maxHeight: "50px",
                minWidth: "120px",
                minHeight: "30px",
              }}
              variant="contained"
              startIcon={<TwitterIcon />}
              color="secondary"
            >
              Twitter
            </Button>
            <Button
              target="_blank"
              href="https://github.com/Shane-Gray394"
              sx={{
                margin: "1% 90%",
                maxWidth: "500px",
                maxHeight: "50px",
                minWidth: "120px",
                minHeight: "30px",
              }}
              variant="contained"
              startIcon={<GitHubIcon />}
              color="secondary"
            >
              GitHub
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
