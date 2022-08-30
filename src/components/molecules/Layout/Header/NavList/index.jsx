import { Box, List, ListItem, ListItemText } from "@mui/material";

import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";

const DrawerSingleLink = ({ toggleDrawer, link }) => {
  const Router = useRouter();
  const theme = useTheme();

  return (
    <ListItem
      button
      style={{
        padding: "20px",
        justifyContent: "center",
        borderRight:
          Router.asPath == link.path &&
          `4px solid ${theme.palette.primary.main}`,
      }}
      onClick={() => {
        toggleDrawer("left", false);
        Router.push(link.path);
      }}
    >
      <ListItemText primary={link.label} />
    </ListItem>
  );
};

const NavList = ({ toggleDrawer, links }) => {
  return (
    <Box role="presentation">
      <List disablePadding={true} style={{ width: "20em" }}>
        {links.map((link) => (
          <DrawerSingleLink toggleDrawer={toggleDrawer} link={link} />
        ))}
      </List>
    </Box>
  );
};

export { NavList };
