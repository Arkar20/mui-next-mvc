import React from "react";
import { Grid, Box, Typography, styled } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

const UnderLine = styled("div")({
  width: "40%",
  height: "4px",
  margin: "auto",
  backgroundColor: lightBlue[900],
});

const Heading = ({ children }) => (
  <Grid
    container
    item
    justifyContent="center"
    style={{ paddingTop: 20, marginBottom: 20 }}
  >
    <Box>
      {/* <Grid item>  */}
      <Typography variant="h6" gutterBottom color="primary">
        {children}
      </Typography>
      <UnderLine />
    </Box>
  </Grid>
);

export { Heading };
