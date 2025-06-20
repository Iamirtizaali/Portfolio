import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          button
          component={RouterLink}
          to={item.path}
          key={item.name}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            Irtiza Ali
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleTheme}
            color="inherit"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 