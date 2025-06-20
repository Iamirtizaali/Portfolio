import { motion } from 'framer-motion';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { FaGraduationCap, FaCode, FaProjectDiagram } from 'react-icons/fa';

const timelineData = [
  {
    year: '2024',
    title: 'Software Engineering',
    description: 'Currently pursuing degree at UET Lahore',
    icon: FaGraduationCap,
  },
  {
    year: '2023',
    title: 'Limoarc Project',
    description: 'Developed a luxurious ride-booking app for VIP transportation',
    icon: FaProjectDiagram,
  },
  {
    year: '2023',
    title: 'Onyx Inspection',
    description: 'Created a platform for inspection and certification services',
    icon: FaProjectDiagram,
  },
  {
    year: '2023',
    title: 'GiftShare Platform',
    description: 'Built a donation-based platform for sharing goods',
    icon: FaProjectDiagram,
  },
  {
    year: '2022',
    title: 'Web Development Skills',
    description: 'Mastered frontend and backend technologies',
    icon: FaCode,
  },
];

const Timeline = () => {
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
            My Journey
          </Typography>

          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 2,
                height: '100%',
                background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                [theme.breakpoints.down('sm')]: {
                  left: 20,
                },
              },
            }}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'relative',
                    mb: 4,
                    [theme.breakpoints.down('sm')]: {
                      flexDirection: 'column',
                      ml: 4,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '45%',
                      [theme.breakpoints.down('sm')]: {
                        width: '100%',
                        mb: 2,
                      },
                    }}
                  >
                    {index % 2 === 0 && (
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 4,
                          background: theme.palette.background.paper,
                          boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
                        }}
                      >
                        <Box
                          component={item.icon}
                          sx={{
                            fontSize: '2rem',
                            color: theme.palette.primary.main,
                            mb: 2,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.secondary,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Paper>
                    )}
                  </Box>

                  <Box
                    sx={{
                      width: '45%',
                      [theme.breakpoints.down('sm')]: {
                        width: '100%',
                      },
                    }}
                  >
                    {index % 2 === 1 && (
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 4,
                          background: theme.palette.background.paper,
                          boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
                        }}
                      >
                        <Box
                          component={item.icon}
                          sx={{
                            fontSize: '2rem',
                            color: theme.palette.primary.main,
                            mb: 2,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.secondary,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Paper>
                    )}
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 600,
                      [theme.breakpoints.down('sm')]: {
                        left: 0,
                        transform: 'translateX(-50%)',
                      },
                    }}
                  >
                    {item.year}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Timeline; 