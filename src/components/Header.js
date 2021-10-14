import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography color="#eee5e9">My Portfolio</Typography>
        <ButtonGroup>
          <Button
            color="secondary"
            component={Link}
            to="/"
            variant="contained"
            startIcon={<HomeIcon />}
          >
            {" "}
            <Typography variant="h8" color="#eee5e9">
              Home
            </Typography>
          </Button>
          <Button
            color="secondary"
            component={Link}
            to="/projects"
            variant="contained"
            startIcon={<FolderIcon />}
          >
            <Typography variant="h8" color="#eee5e9">
              Projects
            </Typography>
          </Button>
          <Button
            color="secondary"
            component={Link}
            to="/contact"
            variant="contained"
            startIcon={<ContactPageIcon />}
          >
            {" "}
            <Typography variant="h8" color="#eee5e9">
              Contact
            </Typography>
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
