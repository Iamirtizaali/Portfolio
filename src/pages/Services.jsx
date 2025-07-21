import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaTachometerAlt,
} from 'react-icons/fa';
import { Helmet } from "react-helmet";

const services = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using modern web technologies.',
    icon: FaCode,
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs using Node.js and other technologies.',
    icon: FaServer,
  },
  {
    title: 'Full Stack Projects',
    description: 'End-to-end web application development with seamless frontend and backend integration.',
    icon: FaLaptopCode,
  },
  {
    title: 'API Development',
    description: 'Designing and implementing RESTful APIs with proper documentation and security measures.',
    icon: FaDatabase,
  },
  {
    title: 'Web Application Optimization',
    description: 'Improving performance, accessibility, and user experience of web applications.',
    icon: FaTachometerAlt,
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Helmet>
        <title>Services | Irtiza Ali</title>
        <meta name="description" content="Discover the web development services offered by Irtiza Ali, including frontend, backend, and full stack solutions." />
      </Helmet>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Services
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      background: theme.palette.background.paper,
                      boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box
                      component={service.icon}
                      sx={{
                        fontSize: '2.5rem',
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services; 