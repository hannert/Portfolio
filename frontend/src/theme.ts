"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";

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
    }, 
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "FDF2E8",
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
    text: {
      primary: '#3a2c2a',
    },
  },
  typography: {
    button: {
      fontFamily: "Montserrat",
      color: "#707866",
    },

  },
  

});

const finalTheme = responsiveFontSizes(theme);


export default finalTheme;
