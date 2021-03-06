import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#100c08",
    },
    secondary: {
      main: "#540b0e",
    },
    text: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Alice", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
