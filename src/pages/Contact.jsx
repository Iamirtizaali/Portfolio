import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        padding: { xs: "50px 20px", sm: "80px 60px" },
        backgroundColor: "#f7f7f7",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Contact Me
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginBottom: "40px" }}
      >
        Have a question or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
      </Typography>
      
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box
            component="form"
            name="contact"
            method="POST"
            data-netlify="true"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <input type="hidden" name="form-name" value="contact" />

            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
            />
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ alignSelf: "flex-start" }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
