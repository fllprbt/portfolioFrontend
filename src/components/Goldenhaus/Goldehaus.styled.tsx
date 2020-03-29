import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridGap: "3px",
    backgroundColor: "#fff", //TODO: fix
    color: "#444", //TODO: fix
    gridAutoFlow: "dense",
    gridAutoRows: "minmax(30px, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",

    [theme.breakpoints.up("sm")]: {
      gridTemplateRows: "none",
      gridTemplateColumns: "repeat(13, 1fr)"
    }
  }
}));
