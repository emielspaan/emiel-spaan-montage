import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { bodyFont, headingFont } from './fonts';
import { palette } from './variables';

const {
  primary, secondary, textPrimary, textSecondary,
} = palette;

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
  },
  typography: {
    body1: {
      fontFamily: bodyFont,
    },
    body2: {
      fontFamily: bodyFont,
    },
    heading1: {
      fontFamily: headingFont,
    },
    heading2: {
      fontFamily: headingFont,
    },
    heading3: {
      fontFamily: headingFont,
    },
    heading4: {
      fontFamily: headingFont,
    },
    heading5: {
      fontFamily: headingFont,
    },
    heading6: {
      fontFamily: headingFont,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: primary,
          minWidth: '230px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: textPrimary,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: primary,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node,
};

Theme.defaultProps = {
  children: null,
};
