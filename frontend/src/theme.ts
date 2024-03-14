"use client";
import { createTheme } from "@mui/material";

const iconHoverColor = "#dfebf9"


const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&:hover': {
            fill: iconHoverColor
          }
        }
      }
    }

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
      hover: {color:'red'},
    },

  },
  

});

export default theme;
