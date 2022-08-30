import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { NavList } from "../NavList";

const LeftDrawer = ({ open, toggleDrawer, links }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer("left", false)}
      onOpen={() => toggleDrawer("left", true)}
    >
      <NavList toggleDrawer={toggleDrawer} links={links} />
    </SwipeableDrawer>
  );
};

export { LeftDrawer };
