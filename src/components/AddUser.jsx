import React, { useState } from 'react';
import Sidebar from './Navbar';
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Autocomplete,
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  CircularProgress
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddUser = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    group: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setFormValues({
        username: '',
        name: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        group: '',
      });
      toast.success('Form submitted successfully!');
      setErrors({});
    } catch (err) {
      if (err.inner) {
        const newErrors = err.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(newErrors);
      }
    }
  };


  const validationSchema = Yup.object({
    username: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be greater than 6 characters'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required') ,
    group: Yup.string().required('Group is required'),
    lastName: Yup.string().required('Last Name is required'),
    firstName: Yup.string().required('First Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    
  });


  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            color: '#DC9E0B',
            marginTop: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '8px',
          }}>
          <PersonAddIcon sx={{ fontSize: '40px', marginRight: '10px' }} />
          ADD STUDENT DETAIL
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 1,
            borderRadius: 0,
            boxShadow: 0,
            backgroundColor: '#fff',
            width: '100%',
            maxWidth: '800px',
            marginLeft: '-50px'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              <TextField
                required
                name="username"
                label="User name"
                variant="outlined"
                fullWidth
                value={formValues.username}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.username)}
                helperText={errors.username}
              />


                <TextField
                  required
                  name="password"
                  label="Password "
                  variant="outlined"
                  fullWidth
                  value={formValues.password}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />

              <TextField
                required
                name="confirmPassword"
                label="Confirm Password "
                variant="outlined"
                fullWidth
                value={formValues.confirmPassword}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword}
              />

              <TextField
                required
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formValues.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12} sm={6}>

              <TextField
                required
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                value={formValues.firstName}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />

             <TextField
                required
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={formValues.lastName}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />

             <TextField
                required
                name="group"
                label="Group"
                variant="outlined"
                fullWidth
                value={formValues.group}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.group)}
                helperText={errors.group}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              sx={{
                background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                color: 'white',
                padding: '12px 24px',
                fontSize: '15px',
                height: '40px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                  color: 'white',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Submit'}
            </Button>
          </Box>
        </Box>
        <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      </Box>
    </Box>
  );
};

export default AddUser;
