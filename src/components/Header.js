import React from "react";
import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const switchCase = (param) => {
    switch (param) {
      case "a":
        return (
          <div>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant={"contained"}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem component={Link} to="/contact" onClick={handleClose}>
                Contact
              </MenuItem>
              <MenuItem component={Link} to="/projects" onClick={handleClose}>
                Projects
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Home
              </MenuItem>
            </Menu>
          </div>
        );
      case "b":
        return (
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
        );
      default:
        break;
    }
  };
  return (
    <AppBar color="primary" position="static" sx={{ padding: ".5% 0" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography color="#eee5e9" fontSize={30}>
          My Portfolio
        </Typography>
        {matches ? switchCase("a") : switchCase("b")}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
