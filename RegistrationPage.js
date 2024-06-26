import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, MenuItem, Button, Paper, Box } from '@mui/material';
import { registerUser } from './features/user/userAPI';
import { useNavigate, Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    gender: '',
    dob: '',
    address: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.contact) formErrors.contact = 'Contact number is required';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    if (!formData.dob) formErrors.dob = 'Date of Birth is required';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (!formData.confirmPassword) formErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // If validation passes, register user
    try {
      // Register student
      const newStudent = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        gender: formData.gender,
        dob: formData.dob,
        address: formData.address,
        password: formData.password,
      };

      await registerUser('students', newStudent); // Assuming `registerUser` method handles API call

      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration failure
    }
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h4" gutterBottom>Registration Form</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.contact}
                  helperText={errors.contact}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  select
                  fullWidth
                  required
                  error={!!errors.gender}
                  helperText={errors.gender}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Birth"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  type="date"
                  fullWidth
                  required
                  error={!!errors.dob}
                  helperText={errors.dob}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.address}
                  helperText={errors.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <Button type="submit" variant="contained" color="primary" fullWidth>
                  Register
                </Button>      original button just using fake button to run the program*/}
                
                
                <Button component={Link} to= {`/admincrud`} variant="contained" color="primary" fullWidth>
                  Register
                </Button>

              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegistrationPage;
