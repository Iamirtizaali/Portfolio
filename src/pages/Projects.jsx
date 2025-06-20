import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Button, Chip, useTheme } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import limoarc from '../assets/limoarc.png';
import onyx from '../assets/onyx.png';
import giftshare from '../assets/giftshare.png';

const projects = [
  {
    title: 'Limoarc',
    description: 'A luxurious ride-booking app for VIP transportation.',
    techStack: ['Node.js', 'MongoDB'],
    link: 'https://www.limoarc.com/',
    github: null,
    image: limoarc,
  },
  {
    title: 'Onyx Inspection',
    description: 'A platform offering inspection, testing, and certification services.',
    techStack: ['Node.js', 'MongoDB'],
    link: 'https://onyxinspection.com/',
    github: null,
    image: onyx,
  },
  {
    title: 'GiftShare',
    description: 'A donation-based platform for sharing and requesting goods.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'HTML/CSS/JS'],
    link: null,
    github: 'https://github.com/Iamirtizaali/GiftShare.git',
    image: giftshare,
  },
];

const Projects = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
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
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      background: theme.palette.background.paper,
                      boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        {project.techStack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              color: 'white',
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        {project.github && (
                          <Button
                            variant="outlined"
                            startIcon={<FaGithub />}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              borderRadius: '50px',
                              px: 3,
                            }}
                          >
                            GitHub
                          </Button>
                        )}
                        {project.link && (
                          <Button
                            variant="contained"
                            startIcon={<FaExternalLinkAlt />}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              borderRadius: '50px',
                              px: 3,
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              '&:hover': {
                                background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                              },
                            }}
                          >
                            Visit Site
                          </Button>
                        )}
                      </Box>
                    </Box>
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

export default Projects; 