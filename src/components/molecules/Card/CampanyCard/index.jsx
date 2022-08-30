import React from "react";
import { Grid, Typography, Avatar, Card, Box, Container } from "@mui/material";
import { lightBlue, deepOrange } from "@mui/material/colors";

const TriangleShape = () => (
  <Box
    style={{
      width: 0,
      height: 0,
      borderLeft: " 25px solid transparent",
      borderRight: " 25px solid transparent",
      borderBottom: `25px solid ${lightBlue[900]}`,
    }}
  />
);
const CompanyCard = ({ icon, title, para }) => (
  <Grid item xs={12} lg={6}>
    <Grid container justifyContent="center">
      <Grid item container justifyContent="center" xs={12}>
        <Avatar sx={{ width: 56, height: 56, bgcolor: deepOrange[500] }}>
          {icon}
        </Avatar>
      </Grid>
      {/* </br><br></br> */}
      <Grid item>
        <TriangleShape />
      </Grid>
    </Grid>

    <Card
      style={{ background: lightBlue[900], padding: 30, textAlign: "center" }}
      raised
    >
      <Typography color="white" gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography color="white" gutterBottom variant="p">
        {para}
      </Typography>
    </Card>
  </Grid>
);

export { CompanyCard };
