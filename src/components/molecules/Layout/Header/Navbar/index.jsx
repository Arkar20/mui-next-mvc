import { useEffect, useState, useContext } from "react";

/** importing mui components */
import {
  AppBar,
  Grid,
  Tabs,
  Tab,
  Switch,
  Box,
  Slide,
  Toolbar,
} from "@mui/material";

/** importing mui icons */
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";

/** importing mui utilities */
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";

/** importing local components */
import { HeaderMargin } from "../HeaderMargin/";
import { LeftDrawer } from "../LeftDrawer/";

import Link from "src/Link";

/** public  */
import logo from "public/logo.png";

/** next components */
import { useRouter } from "next/router";
import { NextImg } from "src/components";
import { CustomTheme } from "src/context/CustomThemeContext";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const links = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About Us",
    path: "/about",
  },
  {
    id: 3,
    label: "Projects",
    path: "/projects",
  },
];

const Navbar = (props) => {
  const { theme: themehook, changeTheme } = useContext(CustomTheme);
  const router = useRouter();
  const [value, setValue] = useState(0);
  useEffect(() => {
    switch (router.asPath) {
      case "/": {
        setValue(0);
        break;
      }
      case "/about": {
        setValue(1);

        break;
      }
      case "/projects": {
        setValue(2);
        break;
      }

      default: {
        setValue(0);
      }
    }

    if (router.asPath.includes("/projects")) {
      setValue(2);
    }
  }, [router.asPath]);

  const [state, setState] = useState({
    right: false,
    left: false,
  });

  const theme = useTheme();

  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (anchor, open) => {
    setState({ ...state, [anchor]: open });
  };

  const tabChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={tabChange}
        aria-label="tabs-navigation"
        indicatorColor="primary"
      >
        {links.map((link, index) => (
          <Tab
            key={link.id}
            index={index}
            component={Link}
            href={link.path}
            label={link.label}
          />
        ))}
      </Tabs>
    </>
  );
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll {...props}>
          <AppBar color="inherit" elevation={0}>
            <Toolbar>
              {matchesMd && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={() => toggleDrawer("left", true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <IconButton
                clor="secondary"
                cmponent={Link}
                href="/"
                disableRipple
              >
                <NextImg src="/logo.png" width={40} height={50} />
              </IconButton>

              <Grid
                container
                justifyContent={matchesMd ? "flex-end" : "center"}
                alignItems={"center"}
              >
                {!matchesMd && <Grid item>{tabs}</Grid>}
              </Grid>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="facebook icon"
                sx={{ mr: 2 }}
              >
                <FacebookIcon />
              </IconButton>

              <Switch
                checked={themehook === "dark"}
                onChange={() => {
                  themehook === "dark"
                    ? changeTheme("light")
                    : changeTheme("dark");
                }}
              />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>

      <LeftDrawer open={state.left} toggleDrawer={toggleDrawer} links={links} />
      <HeaderMargin />
    </div>
  );
};

export { Navbar };
