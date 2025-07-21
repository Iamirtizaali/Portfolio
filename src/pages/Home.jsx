import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import profilePic from '../assets/irtiza.png';
import { Helmet } from "react-helmet";

<Helmet>
  <title>Irtiza Ali | Backend Developer</title>
  <meta name="description" content="Explore Irtiza Ali's skills in MERN Stack, backend APIs, and modern web development." />
</Helmet>

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ flex: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Hi, I'm Irtiza Ali
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 3,
                color: theme.palette.text.secondary,
              }}
            >
              Web Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                maxWidth: '600px',
              }}
            >
              I create beautiful, functional, and user-centric websites and applications.
              Let's build something amazing together.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/projects"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  },
                }}
              >
                View Projects
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                }}
              >
                Contact Me
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ flex: 1 }}
          >
            <Box
              component="img"
              src={profilePic}
              alt="Irtiza Ali"
              sx={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: `0 20px 40px rgba(0,0,0,0.2)`,
                display: 'block',
                margin: '0 auto',
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 