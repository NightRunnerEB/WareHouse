import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon, Person as PersonIcon } from '@mui/icons-material';

interface NavbarProps {
  toggleMenu: () => void; // Функция для сворачивания бокового меню
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#130a2a',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        height: '60px',
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: '20px',
        }}
      >
        {/* Иконка меню */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleMenu}
          sx={{
            fontSize: '24px',
            color: '#ffffff',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Заголовок */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}>
          Товары
        </Typography>

        {/* Ссылки навигации */}
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#ffffff',
              padding: '8px 12px',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              cursor: 'pointer',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            }}
          >
            Склады
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#ffffff',
              padding: '8px 12px',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              cursor: 'pointer',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            }}
          >
            О системе
          </Typography>
        </Box>

        {/* Иконка пользователя */}
        <IconButton
          color="inherit"
          sx={{
            color: '#ffffff',
            '&:hover': { color: '#dcdcdc' },
          }}
        >
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;