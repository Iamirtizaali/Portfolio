import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, LinearProgress, useTheme } from '@mui/material';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiDotnet,
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const skills = [
  { name: 'HTML', icon: SiHtml5, level: 90 },
  { name: 'CSS', icon: SiCss3, level: 85 },
  { name: 'JavaScript', icon: SiJavascript, level: 90 },
  { name: 'React', icon: SiReact, level: 85 },
  { name: 'Node.js', icon: SiNodedotjs, level: 80 },
  { name: 'Express.js', icon: SiExpress, level: 75 },
  { name: 'MongoDB', icon: SiMongodb, level: 70 },
  { name: 'C#', icon: FaMicrosoft, level: 65 }, // ✅ Fixed here
  { name: 'Python', icon: SiPython, level: 60 },
  { name: '.NET', icon: SiDotnet, level: 55 },
];


const Skills = () => {
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
        <title>Skills | Irtiza Ali</title>
        <meta name="description" content="View the technical skills and technologies mastered by Irtiza Ali, including React, Node.js, MongoDB, and more." />
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
            Skills & Technologies
          </Typography>

          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
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
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Box
                        component={skill.icon}
                        sx={{
                          fontSize: '2rem',
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: theme.palette.background.default,
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        textAlign: 'right',
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {skill.level}%
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

export default Skills;
