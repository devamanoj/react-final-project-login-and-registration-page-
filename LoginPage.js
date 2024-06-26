// LoginPage.js

import React, { useState } from 'react';
import { TextField, Button, Container, MenuItem, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from './features/user/userSlice';
import { useNavigate, Link } from 'react-router-dom';
import ParentAdmRouter from "../AdminConsole/ParentAdmRouter";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const resultAction = await dispatch(loginUser({ username, password, userType }));
  //   if (loginUser.fulfilled.match(resultAction)) {
  //     navigate(`/dashboard/${userType}`);
  //   }
  // };

  return (
    <Container maxWidth="sm">
      <Box mt={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 360 }}>

          {/* <form onSubmit={handleSubmit}> original button*/}
          <form onSubmit={ParentAdmRouter}> 
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="User Type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              select
              fullWidth
              margin="normal"
              variant="outlined"
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="trainer">Trainer</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>

            {/* <Button type="submit"  variant="contained" color="primary" fullWidth>
              Login
            </Button>     this is original button  */ }  


            <Button component={Link} to= {`/admincrud`} variant="contained" color="primary" fullWidth>
              Login
            </Button>   
          </form>
          <Box mt={2}>
            <Button component={Link} to="/RegistrationPage" variant="text" fullWidth>
              New User? Register Here
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
