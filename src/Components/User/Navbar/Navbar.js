import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            style={{
              backgroundColor: "#f1f1f1",
              position: "fixed",
              width: "100%",
              height: "20px",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "#000" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                StudyOuk
              </Link>
            </Typography>
            <>
              <Button color="inherit" style={{ color: "#000" }}>
                <Link
                  to="/login/next=homepage"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
              <Button color="inherit" style={{ color: "#000" }}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </Button>
            </>
          </Toolbar>
        </AppBar>
        <div style={{ height: "50px" }}></div>
      </Box>
    </div>
  );
}

export default Navbar;
