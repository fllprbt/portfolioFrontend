import { makeStyles, Theme } from "@material-ui/core";

interface StylesProps {
  widthSpan: number;
  heightSpan: number;
}

export const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) => ({
  root: {
    backgroundColor: "#444", // TODO fix
    color: "#fff", // TODO fix
    borderRadius: "0px", // TODO fix
    fontSize: "100%", // TODO fix

    gridRowEnd: props => `span ${props.widthSpan}`,
    gridColumnEnd: props => `span ${props.heightSpan}`,

    [theme.breakpoints.up("sm")]: {
      gridColumnEnd: props => `span ${props.heightSpan}`,
      gridRowEnd: props => `span ${props.widthSpan}`
    }
  }
}));
