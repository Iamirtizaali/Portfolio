import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Button, useTheme } from '@mui/material';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import css from '../assets/css.webp';
import react from '../assets/react.webp';
import node from '../assets/node.webp';
import React, { useState } from 'react';
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    title: 'Getting Started with React and Vite',
    excerpt: 'Learn how to set up a modern React development environment using Vite, and explore its benefits over traditional build tools.',
    date: 'March 15, 2024',
    author: 'Irtiza Ali',
    category: 'Web Development',
    image: react,
    content: `Vite is a modern build tool for frontend development. It offers fast startup and hot module replacement. To get started, install Vite globally or use npm init vite@latest. Choose the React template, install dependencies, and start the dev server. Vite is much faster than older tools like Create React App, especially for large projects.`,
  },
  {
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'A comprehensive guide to creating scalable and maintainable RESTful APIs using Node.js and Express.js.',
    date: 'March 10, 2024',
    author: 'Irtiza Ali',
    category: 'Backend Development',
    image: node,
    content: `Node.js and Express.js make it easy to build RESTful APIs. Start by initializing a new Node project and installing Express. Define routes for your resources, use middleware for parsing JSON, and handle errors gracefully. Structure your project for scalability by separating routes, controllers, and models.`,
  },
  {
    title: 'Modern CSS Techniques',
    excerpt: 'Explore modern CSS features and techniques to create beautiful and responsive user interfaces.',
    date: 'March 5, 2024',
    author: 'Irtiza Ali',
    category: 'Frontend Development',
    image: css,
    content: `Modern CSS includes features like Flexbox, Grid, custom properties (variables), and media queries. Use Flexbox and Grid for layout, variables for maintainable styles, and media queries for responsiveness. Explore CSS frameworks and preprocessors for even more power.`,
  },
];

const Blog = () => {
  const theme = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Helmet>
        <title>Blog | Irtiza Ali</title>
        <meta name="description" content="Read articles and tutorials by Irtiza Ali on web development, React, Node.js, and more." />
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
            Blog
          </Typography>

          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={6} lg={4} key={post.title}>
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
                      src={post.image}
                      alt={post.title}
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
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: theme.palette.text.secondary,
                          }}
                        >
                          <FaCalendarAlt sx={{ mr: 1 }} />
                          <Typography variant="body2">{post.date}</Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: theme.palette.text.secondary,
                          }}
                        >
                          <FaUser sx={{ mr: 1 }} />
                          <Typography variant="body2">{post.author}</Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: theme.palette.text.secondary,
                          mb: 3,
                        }}
                      >
                        <FaTag sx={{ mr: 1 }} />
                        <Typography variant="body2">{post.category}</Typography>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: '50px',
                          px: 3,
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          '&:hover': {
                            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                          },
                        }}
                        onClick={() => handleExpand(index)}
                      >
                        {expandedIndex === index ? 'Show Less' : 'Read More'}
                      </Button>
                      {expandedIndex === index && (
                        <Box sx={{ mt: 3 }}>
                          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                            {post.content}
                          </Typography>
                        </Box>
                      )}
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

export default Blog; 