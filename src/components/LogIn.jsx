import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Background from '../assets/login_bg_4.png';
import Logo from "../assets/Pinesphere.png";

const defaultTheme = createTheme();

const Log_in = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic
    navigate('/'); // Navigate to dashboard or desired route after successful login
  }

  return (
    <div
      style={{
        backgroundColor: '',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container 
          component="main" 
          sx={{
            display: 'flex',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#fff',
            padding: '20px',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '30px',
            height: '73vh', // Adjusted height
            width: '700px', // Set a custom width value for the container
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' // Add box shadow here
          }}
        >
          <CssBaseline />
          
          <Box 
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '10px',
              height: '100%', // Ensure the height is 100% to match the container
              backgroundImage: `url(${Background})`,
              backgroundSize: 'cover',
              marginLeft: '-30px',
              marginRight: '30px'
            }}
          >
           </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingRight: '20px',
              height: '100%' // Ensure the height is 100% to match the container
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                mb: 2, // Add margin-bottom to space it from the Typography
              }}
            >
              <img src={Logo} alt="Logo" width={40} height={40} className="Logo" style={{ borderRadius: '50%' }} />
            </Box>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/sign_up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Log_in;
// login vector - <a href="https://storyset.com/user">User illustrations by Storyset</a>