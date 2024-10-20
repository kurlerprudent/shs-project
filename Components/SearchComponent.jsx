import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ededed',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
        },
      },
    },
  },
});

function SearchComponent() {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        sx={{'::placeholder':{color:'black'}}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{color:'black'}} />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
}

export default SearchComponent;
