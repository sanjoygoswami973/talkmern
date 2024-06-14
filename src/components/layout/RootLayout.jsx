import React from "react";
import Home from "../../pages/home/Home";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navber from "./Navber";

const RootLayout = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container>
          <Grid h2 xs={2}>
            <Navber />
          </Grid>
          <Grid h2 xs={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RootLayout;
