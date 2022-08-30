import { styled } from "@mui/material/styles";

const HeaderMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  [theme.breakpoints.down("md")]: {
    marginBottom: "1em",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0.4em",
  },
}));
export { HeaderMargin };
