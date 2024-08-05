import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Sidebar from './Navbar';
import { Button } from '@mui/material';
import Trainer from '../assets/Trainer_3.png';
import College from '../assets/College.png';
import Course from '../assets/Course.png';
import Internship from '../assets/Internship.png';

const AddOther = () => {
  const [showForm, setShowForm] = useState('trainers');
  const [trainerData, setTrainerData] = useState({ trainerName: '', assignedCourse: '' });
  const [collegeData, setCollegeData] = useState({ collegeName: '', shortName: '' });
  const [courseData, setCourseData] = useState({ courseName: '' });
  const [internshipData, setInternshipData] = useState({ internshipName: '', shortName: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e, setData) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (showForm) {
      case 'trainers':
        console.log(trainerData);
        setTrainerData({ trainerName: '', assignedCourse: '' });
        break;
      case 'college':
        console.log(collegeData);
        setCollegeData({ collegeName: '', shortName: '' });
        break;
      case 'course':
        console.log(courseData);
        setCourseData({ courseName: '' });
        break;
      case 'internship':
        console.log(internshipData);
        setInternshipData({ internshipName: '', shortName: '' });
        break;
      default:
        break;
    }
    setOpenSnackbar(true);
  };

  const toggleForm = (formType) => {
    setShowForm(formType.toLowerCase());
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', marginTop: '50px' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
          {['Trainers', 'College', 'Course', 'Internship'].map((item) => (
            <Box
              key={item}
              onClick={() => toggleForm(item)}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '1 1 calc(25% - 16px)',
                margin: '8px',
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '70%',
                  backgroundColor: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9'][['Trainers', 'College', 'Course', 'Internship'].indexOf(item)],
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
                  transition: '0.3s ease-in-out',
                  borderRadius: '10px',
                  '&:hover': {
                    height: '200px',
                    '& .text-overlay': {
                      visibility: 'visible',
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '145px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                    marginBottom: '10px',
                    backgroundColor: 'white',
                  }}
                >
                  <img
                    src={[Trainer, College, Course, Internship][['Trainers', 'College', 'Course', 'Internship'].indexOf(item)]}
                    alt={item}
                    style={{
                      width: '100%',
                      height: '125px',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box
                  className="text-overlay"
                  sx={{
                    padding: '10px 15px',
                    color: '#111',
                    textAlign: 'center',
                    visibility: 'hidden',
                    opacity: 0,
                    transition: '0.3s ease-in-out',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'black' }}>
                    {item}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ width: '60%' }}>
          <Collapse in={showForm === 'trainers'}>
            <Box mt={2} sx={{ border: '1px solid #D3D3D3', p: 2, borderRadius: 1, backgroundColor: '#F9F9F9' }}>
              <Typography variant="h6" align="center" sx={{ mb: 2, color: 'royalblue', fontWeight: 'bold', fontSize: '1.5rem' }}> ADD TRAINER</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Trainer Name"
                  name="trainerName"
                  value={trainerData.trainerName}
                  onChange={(e) => handleChange(e, setTrainerData)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  select
                  label="Assigned Course"
                  name="assignedCourse"
                  value={trainerData.assignedCourse}
                  onChange={(e) => handleChange(e, setTrainerData)}
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="course1">Course 1</MenuItem>
                  <MenuItem value="course2">Course 2</MenuItem>
                  <MenuItem value="course3">Course 3</MenuItem>
                </TextField>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                      color: 'white',
                      padding: '12px 24px',
                      fontSize: '15px',
                      height: '40px',
                      '&:hover': {
                        background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Collapse>

          <Collapse in={showForm === 'college'}>
            <Box mt={2} sx={{ border: '1px solid #D3D3D3', p: 2, borderRadius: 1, backgroundColor: '#F9F9F9' }}>
              <Typography variant="h6" align="center" sx={{ mb: 2, color: 'royalblue', fontWeight: 'bold', fontSize: '1.5rem' }}> ADD COLLEGE</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="College Name"
                  name="collegeName"
                  value={collegeData.collegeName}
                  onChange={(e) => handleChange(e, setCollegeData)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Short Name"
                  name="shortName"
                  value={collegeData.shortName}
                  onChange={(e) => handleChange(e, setCollegeData)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                      color: 'white',
                      padding: '12px 24px',
                      fontSize: '15px',
                      height: '40px',
                      '&:hover': {
                        background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Collapse>

          <Collapse in={showForm === 'internship'}>
            <Box mt={2} sx={{ border: '1px solid #D3D3D3', p: 2, borderRadius: 1, backgroundColor: '#F9F9F9' }}>
              <Typography variant="h6" align="center" sx={{ mb: 2, color: 'royalblue', fontWeight: 'bold', fontSize: '1.5rem' }}> ADD INTERNSHIP</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Internship Name"
                  name="internshipName"
                  value={internshipData.internshipName}
                  onChange={(e) => handleChange(e, setInternshipData)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Short Name"
                  name="shortName"
                  value={internshipData.shortName}
                  onChange={(e) => handleChange(e, setInternshipData)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                      color: 'white',
                      padding: '12px 24px',
                      fontSize: '15px',
                      height: '40px',
                      '&:hover': {
                        background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Collapse>

          <Collapse in={showForm === 'course'}>
            <Box mt={2} sx={{ border: '1px solid #D3D3D3', p: 2, borderRadius: 1, backgroundColor: '#F9F9F9' }}>
              <Typography variant="h6" align="center" sx={{ mb: 2, color: 'royalblue', fontWeight: 'bold', fontSize: '1.5rem' }}> ADD COURSE</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Course Name"
                  name="courseName"
                  value={courseData.courseName}
                  onChange={(e) => handleChange(e, setCourseData)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                      color: 'white',
                      padding: '12px 24px',
                      fontSize: '15px',
                      height: '40px',
                      '&:hover': {
                        background: `linear-gradient(45deg, #B1AEE5 30%, #5091E5 90%)`,
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Collapse>
        </Box>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddOther;
