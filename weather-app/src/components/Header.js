// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  //backgroundColor: '#2196f3', // Vibrant blue color
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 'bold',
  letterSpacing: '1px',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const LinkedInButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const Header = () => {
  return (
    <AppBarStyled position="static">
      <Toolbar>
        <Title variant="h6">
          Weather App
        </Title>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <LinkedInButton href="https://linkedin.com">
          <LinkedInIcon />
        </LinkedInButton>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
