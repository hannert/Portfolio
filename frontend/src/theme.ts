"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#f9eddf",
    },
    secondary: {
      main: "#dfebf9",
    },
  },
  typography: {
    button: {
      fontFamily: "Montserrat",
      color: "#FFFFFF",
    },
  },
});

export default theme;
