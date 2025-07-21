import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaDownload,
} from 'react-icons/fa';
import resume from '../assets/CV.pdf';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolio-backend-5x7t.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || 'Error sending message. Please try again later.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'aliirtiza859@gmail.com',
      link: 'mailto:aliirtiza859@gmail.com',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/irtiza--ali',
      link: 'https://www.linkedin.com/in/irtiza--ali',
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'github.com/Iamirtizaali',
      link: 'https://github.com/Iamirtizaali',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '0304-9823831',
      link: 'tel:03049823831',
    },
  ];

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
            Contact Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: theme.palette.background.paper,
                    boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Get in Touch
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                  >
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      name="subject"
                      label="Subject"
                      variant="outlined"
                      fullWidth
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      name="message"
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: '50px',
                        py: 1.5,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        '&:hover': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: theme.palette.background.paper,
                    boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Contact Information
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {contactInfo.map((info) => (
                      <Box
                        key={info.title}
                        component="a"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: 'inherit',
                          '&:hover': {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        <Box
                          component={info.icon}
                          sx={{
                            fontSize: '1.5rem',
                            color: theme.palette.primary.main,
                            mr: 2,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: theme.palette.text.secondary }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    ))}

                    <Button
                      variant="outlined"
                      startIcon={<FaDownload />}
                      href={resume}
                      download
                      sx={{
                        mt: 2,
                        borderRadius: '50px',
                        py: 1.5,
                      }}
                    >
                      Download Resume
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 