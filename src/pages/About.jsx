import { motion } from 'framer-motion';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { Helmet } from "react-helmet";

const About = () => {
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
        <title>About | Irtiza Ali</title>
        <meta name="description" content="Learn more about Irtiza Ali, a passionate web developer and software engineering student at UET Lahore." />
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
            About Me
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              background: theme.palette.background.paper,
              boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                  mb: 4,
                }}
              >
                I'm Irtiza Ali, a passionate Web Developer with a strong foundation in software engineering. I enjoy building clean, functional, and user-centric websites and applications. Currently pursuing my degree in Software Engineering at UET Lahore, I'm always eager to learn new technologies and contribute to impactful projects. I thrive on solving real-world problems through code and aim to grow into a full-stack developer with a strong grip on both frontend and backend development.
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(2, 1fr)',
                },
                gap: 4,
                mt: 4,
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  Education
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Software Engineering
                  <br />
                  University of Engineering and Technology, Lahore
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Lahore, Pakistan
                </Typography>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 