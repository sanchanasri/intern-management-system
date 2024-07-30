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
import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StudentAnimation from '../assets/StudentReading.png';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const colleges = [
  { label: 'Harvard University' },
  { label: 'Stanford University' },
  { label: 'Massachusetts Institute of Technology' },
  { label: 'California Institute of Technology' },
];

const courses = [
  { label: 'Computer Science' },
  { label: 'Mechanical Engineering' },
  { label: 'Electrical Engineering' },
  { label: 'Civil Engineering' },
];

const trainers = [
  { label: 'John Doe' },
  { label: 'Jane Smith' },
  { label: 'Robert Brown' },
  { label: 'Emily Davis' },
];

const validationSchema = Yup.object({
  aadhar: Yup.string()
    .length(12, 'Aadhar Card must be exactly 12 digits')
    .matches(/^\d+$/, 'Aadhar Card must contain only digits')
    .required('Aadhar Card is required'),
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  whatsappNumber: Yup.string().required('WhatsApp Number is required'),
  gender: Yup.string().required('Gender is required'),
  college: Yup.object().nullable().required('College is required'),
  state: Yup.string().required('State is required'),
  department: Yup.string().required('Department is required'),
  district: Yup.string().required('District is required'),
  passed_out_year: Yup.string().required('Passed out year is required'),
  degree: Yup.string().required('Degree is required'),
  course: Yup.object().nullable().required('Course is required'),
  trainerName: Yup.object().nullable().required('Trainer Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  courseDuration: Yup.number()
    .typeError('Course Duration must be a number')
    .required('Course Duration is required')
    .positive('Course Duration must be a positive number')
    .integer('Course Duration must be an integer'),  courseMode: Yup.string().required('Course Mode is required'),
  profilePhoto: Yup.mixed().required('Profile Photo is required'),
  aadharCard: Yup.mixed().required('Aadhar Card is required'),
  bonafideCertificate: Yup.mixed().required('Bonafide Certificate is required'),
});

const AddStudent = () => {
  const [formValues, setFormValues] = useState({
    aadhar: '',
    name: '',
    phoneNumber: '',
    gender: '',
    college: null,
    state: '',
    department: '',
    district: '',
    degree: '',
    email: '',
    course: null,
    trainerName: null,
    courseDuration: '',
    courseMode: '',
    profilePhoto: null,
    aadharCard: null,
    bonafideCertificate: null,
  });
  const [showOtpField, setShowOtpField] = useState(false);
  const [errors, setErrors] = useState({});

  const [fileNames, setFileNames] = useState({
    profilePhoto: '',
    aadharCard: '',
    bonafideCertificate: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAutocompleteChange = (name) => (event, newValue) => {
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormValues((prevValues) => ({ ...prevValues, [name]: file }));
    setFileNames((prevNames) => ({ ...prevNames, [name]: file ? file.name : '' }));
  };

  const handleFileRemove = (fileType) => () => {
    setFormValues((prevValues) => ({ ...prevValues, [fileType]: null }));
    setFileNames((prevNames) => ({ ...prevNames, [fileType]: '' }));
  };

  const handleGetOtp = () => {
    // Validate phone number here if needed

    // Simulate OTP request
    setShowOtpField(true);
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
        aadhar: '',
        name: '',
        phoneNumber: '',
        whatsappNumber: '',
        gender: '',
        college: null,
        state: '',
        department: '',
        district: '',
        degree: '',
        email: '',
        course: null,
        trainerName: null,
        courseDuration: '',
        passed_out_year:'',
        courseMode: '',
        profilePhoto: null,
        aadharCard: null,
        bonafideCertificate: null,
      });
      setFileNames({
        profilePhoto: '',
        aadharCard: '',
        bonafideCertificate: ''
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

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          }}
        >
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
                name="aadhar"
                label="Aadhar Card"
                variant="outlined"
                fullWidth
                value={formValues.aadhar}
                onChange={handleChange}
                sx={{ mb: 2 }}
                placeholder='xxxx xxxx xxxx'
                error={Boolean(errors.aadhar)}
                helperText={errors.aadhar}
              />
              <TextField
                required
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formValues.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <TextField
                  required
                  name="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  sx={{ flexGrow: 1 }}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGetOtp}
                  sx={{background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`}}
                >
                  Get OTP
                </Button>
              </Box>
              {showOtpField && (
                <>
                <TextField
                  required
                  name="otp"
                  label="OTP"
                  variant="outlined"
                  fullWidth
                  value={formValues.otp}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  error={Boolean(errors.otp)}
                  helperText={errors.otp}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGetOtp}
                  sx={{background: `#4AAA4D`, marginBottom:'10px'}}
                >
                Verify
                </Button>
                </>
              )}
              <TextField
                required
                name="whatsappNumber"
                label="WhatsApp Number"
                variant="outlined"
                fullWidth
                value={formValues.whatsappNumber}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.whatsappNumber)}
                helperText={errors.whatsappNumber}
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
              <FormControl required variant="outlined" fullWidth sx={{ mb: 2 }}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                  label="Gender"
                  error={Boolean(errors.gender)}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {errors.gender &&  <Typography variant="body2" color="error" sx={{ mt: 1 }}>{errors.gender}</Typography>}
              </FormControl>
              <Autocomplete
                  id="college"
                  options={colleges}
                  getOptionLabel={(option) => option.label}
                  value={formValues.college}
                  onChange={handleAutocompleteChange('college')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="College Name"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.college}
                      helperText={errors.college || ' '}
                    />
                  )}
                  sx={{ mb: 2 }}
                />
              <TextField
                required
                name="degree"
                label="Degree"
                variant="outlined"
                fullWidth
                value={formValues.degree}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.degree)}
                helperText={errors.degree}
              />
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>Bonafide Certificate</Typography>
                <div className="relative">
                  <label
                    title="Click to upload"
                    htmlFor="bonafide-certificate-upload"
                    className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#9A71C0] to-[#ECABE1] hover:bg-opacity-90 rounded-sm border border-gray-300 border-dashed transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#9A71C0] to-[#ECABE1] p-2 rounded-sm">
                      <img
                        className="w-7 h-7"
                        src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                        alt="file upload icon"
                        width="512"
                        height="512"
                      />
                      <div className="flex flex-col">
                        <span className="text-xm font-bold text-white">Upload a file</span>
                        <span className="text-xs font-medium text-white">Max n MB</span>
                      </div>
                    </div>
                  </label>
                  <input
                    hidden
                    type="file"
                    id="bonafide-certificate-upload"
                    name="bonafideCertificate"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </Stack>
              {errors.bonafideCertificate && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {errors.bonafideCertificate}
                </Typography>
              )}
              
              {fileNames.bonafideCertificate && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h7" sx={{ mr: 1 }}>{fileNames.bonafideCertificate}</Typography>
                  <IconButton onClick={handleFileRemove('bonafideCertificate')}>
                    <CancelIcon sx={{ color: '#F7454A' }} />
                  </IconButton>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="department"
                label="Department"
                variant="outlined"
                fullWidth
                value={formValues.department}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.department)}
                helperText={errors.department}
              />
              <TextField
                required
                name="passed_out_year"
                label="Passed Out Year"
                variant="outlined"
                fullWidth
                value={formValues.passed_out_year}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={Boolean(errors.passed_out_year)}
                helperText={errors.passed_out_year}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TextField
                  required
                  name="state"
                  label="State"
                  variant="outlined"
                  value={formValues.state}
                  onChange={handleChange}
                  sx={{ mr: 1 }}
                  error={Boolean(errors.state)}
                  helperText={errors.state}
                />
                <TextField
                  required
                  name="district"
                  label="District"
                  variant="outlined"
                  value={formValues.district}
                  onChange={handleChange}
                  sx={{ mr: 1 }}
                  error={Boolean(errors.district)}
                  helperText={errors.district}
                />
              </Box>
              <Autocomplete
                  id="course"
                  options={courses}
                  getOptionLabel={(option) => option.label}
                  value={formValues.course}
                  onChange={handleAutocompleteChange('course')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Course"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.course}
                      helperText={errors.course || ' '}
                    />
                  )}
                  sx={{ mb: 2 }}
                />
                <Autocomplete
                  id="trainerName"
                  options={trainers}
                  getOptionLabel={(option) => option.label}
                  value={formValues.trainerName}
                  onChange={handleAutocompleteChange('trainerName')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Trainer Name"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!errors.trainerName}
                      helperText={errors.trainerName || ' '}
                    />
                  )}
                  sx={{ mb: 2 }}
                />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TextField
                  required
                  name="courseDuration"
                  label="Course Duration"
                  variant="outlined"
                  type="number"
                  value={formValues.courseDuration}
                  onChange={handleChange}
                  sx={{ mr: 1 }}
                  error={Boolean(errors.courseDuration)}
                  helperText={errors.courseDuration}
                />
                <Typography>days</Typography>
              </Box>
              <FormControl required variant="outlined" fullWidth sx={{ mb: 2 }}>
                <InputLabel id="courseMode-label">Course Mode</InputLabel>
                <Select
                  name="courseMode"
                  value={formValues.courseMode}
                  onChange={handleChange}
                  label="Course Mode"
                  error={Boolean(errors.courseMode)}
                >
                  <MenuItem value="online">Online</MenuItem>
                  <MenuItem value="offline">Offline</MenuItem>
                </Select>
                {errors.courseMode && <Typography variant="body2" color="error" sx={{ mt: 1 }}>{errors.courseMode}</Typography>}
              </FormControl>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>Profile Photo</Typography>
                <div className="relative">
                  <label
                    title="Click to upload"
                    htmlFor="profile-photo-upload"
                    className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#FF6F61] to-[#FFAB91] hover:bg-opacity-90 rounded-sm border border-gray-300 border-dashed transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#FF6F61] to-[#FFAB91] p-2 rounded-sm">
                      <img
                        className="w-7 h-7"
                        src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                        alt="file upload icon"
                        width="512"
                        height="512"
                      />
                      <div className="flex flex-col">
                        <span className="text-xm font-bold text-white">Upload a file</span>
                        <span className="text-xs font-medium text-white">Max n MB</span>
                      </div>
                    </div>
                  </label>
                  <input
                    hidden
                    type="file"
                    id="profile-photo-upload"
                    name="profilePhoto"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </Stack>
              {errors.profilePhoto && (
                  <Typography variant="body2" color="error">
                    {errors.profilePhoto}
                  </Typography>
                )}
              {fileNames.profilePhoto && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h7" sx={{ mr: 1 }}>{fileNames.profilePhoto}</Typography>
                  <IconButton onClick={handleFileRemove('profilePhoto')}>
                    <CancelIcon sx={{ color: '#F7454A' }} />
                  </IconButton>
                </Box>
              )}
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>Aadhar Card</Typography>
                <div className="relative">
                  <label
                    title="Click to upload"
                    htmlFor="aadhar-card-upload"
                    className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#586FE7] to-[#00D9D5] hover:bg-opacity-90 rounded-sm border border-gray-300 border-dashed transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#586FE7] to-[#00D9D5] p-2 rounded-sm">
                      <img
                        className="w-7 h-7"
                        src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                        alt="file upload icon"
                        width="512"
                        height="512"
                      />
                      <div className="flex flex-col">
                        <span className="text-xm font-bold text-white">Upload a file</span>
                        <span className="text-xs font-medium text-white">Max n MB</span>
                      </div>
                    </div>
                  </label>
                  <input
                    hidden
                    type="file"
                    id="aadhar-card-upload"
                    name="aadharCard"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </Stack>
              {errors.aadharCard && (
                  <Typography variant="body2" color="error">
                    {errors.aadharCard}
                  </Typography>
                )}
              {fileNames.aadharCard && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h7" sx={{ mr: 1 }}>{fileNames.aadharCard}</Typography>
                  <IconButton onClick={handleFileRemove('aadharCard')}>
                    <CancelIcon sx={{ color: '#F7454A' }} />
                  </IconButton>
                </Box>
              )}
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
      <Box
        sx={{
          position: 'absolute',
          bottom: -270,
          right: 5,
          width: '250px',
          height: '200px',
          overflow: 'hidden',
          zIndex: -1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
    </Box>
  );
};

export default AddStudent;
