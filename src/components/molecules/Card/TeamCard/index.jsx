import React from "react";

import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamCard = ({
  title,
  role,
  children: paragraph,
  profile,
  facebook,
  linkedIn,
  github,
}) => (
  <Grid item xs={12} lg={3}>
    <Card variant="outlined" style={{ minWidth: 200, borderRadius: 40 }}>
      <CardContent style={{ textAlign: "center" }}>
        <Avatar
          alt={title}
          src={profile}
          style={{ margin: "auto" }}
          sx={{ width: 56, height: 56 }}
        />

        <Typography sx={{ fontSize: 10 }}>Hi I am</Typography>

        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          {title}
        </Typography>

        <Typography sx={{ fontSize: 12 }} gutterBottom>
          ({role})
        </Typography>

        <Typography variant="body2">{paragraph}</Typography>

        {facebook && (
          <IconButton>
            <FacebookIcon color="secondary" />
          </IconButton>
        )}

        {github && (
          <IconButton>
            <GitHubIcon color="secondary" />
          </IconButton>
        )}

        {linkedIn && (
          <IconButton>
            <LinkedInIcon color="secondary" />
          </IconButton>
        )}
      </CardContent>
    </Card>
  </Grid>
);

export { TeamCard };
