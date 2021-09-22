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
        <Typography>My Portfolio</Typography>
        <ButtonGroup>
          <Button
            color="secondary"
            component={Link}
            to="/"
            variant="contained"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            color="secondary"
            component={Link}
            to="/projects"
            variant="contained"
            startIcon={<FolderIcon />}
          >
            Projects
          </Button>
          <Button
            color="secondary"
            component={Link}
            to="/contact"
            variant="contained"
            startIcon={<ContactPageIcon />}
          >
            Contact
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
