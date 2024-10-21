
'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
  palette: {
    mode: 'light', 
    primary: {
      main: '#005A8D',
      light: '#63a4ff',
      dark: '#115293',
    },
    secondary: {
      main: '#EFF3F5',
      light: '#FEFEFE',
      dark: '#101010',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    custom: {
      main: '#ff5722',
      contrastText: '#181818',
    },
  },
});

export default theme;
