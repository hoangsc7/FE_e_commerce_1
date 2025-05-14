import React from "react";
import { Button, Typography, Grid, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center p-10 mt-10 flex justify-around "
        container
        sx={{ textTransform: "none", bgcolor: "black", color: "white" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="text-white pb-5" variant="h6">
            Company
          </Typography>
          <Box className="flex flex-col ">
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              About
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Blog
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Press
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Jobs
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Partners
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="text-white pb-5" variant="h6">
            Solutions
          </Typography>
          <Box className="flex flex-col space-y-2">
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Marketing
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Analytics
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Commerce
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Insights
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Support
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="text-white pb-5" variant="h6">
            Documentation
          </Typography>
          <Box className="flex flex-col space-y-2">
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Guides
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              API Status
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="text-white pb-5" variant="h6">
            Legal
          </Typography>
          <Box className="flex flex-col space-y-2">
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Claims
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Privacy
            </Button>
            <Button
              className="text-white"
              sx={{ textTransform: "none", justifyContent: "flex-start" }}
              gutterBottom
            >
              Terms
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid className="space-y-10 text-center">
        <Typography className="text-gray-400 bg-black p-5" variant="body2">
          © 2024 My Company. All rights reserved. <br />
          Made by Hoang <br />
          Icon made by Freepik from{" "}
          <Link href="https://www.flaticon.com/" title="">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
