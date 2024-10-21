"use client"


import TextField from '@mui/material/TextField';

import {  InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';




const SearchComponent = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#000' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        height: '40px',
        borderRadius: '8px',
        backgroundColor: '#f3f3f4',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 48, 73, 0.4)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 48, 73, 0.4)',
            boxShadow: '0 0 0 4px rgba(0, 48, 73, 0.1)',
          },
        },
        '& .MuiInputBase-input': {
          paddingLeft: '2.5rem',
          color: '#0d0c22',
        },
        '& .MuiInputBase-input::placeholder': {
          color: '#9e9ea7',
        },
      }}
    />
  );
};

export default SearchComponent;
