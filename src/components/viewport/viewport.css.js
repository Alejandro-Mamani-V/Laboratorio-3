import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  style: {
    color: theme.viewport.colors.contrastText,
    fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  },
}));
