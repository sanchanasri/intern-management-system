import React, { useState, useEffect } from 'react';
import Sidebar from './Navbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import LottiePlayer from 'react-lottie-player';
import DeleteAnimation from '../assets/DeleteAnimation.json'
import SuccessAnimation from '../assets/SuccessAnimation.json'
import Lottie from 'lottie-react';
import { Dialog, DialogContent, Typography, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardContent, Grid, Link } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  margincenter: '40px',
  padding: '2px 4px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
  maxWidth: '1400px',
  backgroundColor: 'white',
  '&:hover': {
    border: '1px solid #8a2be2',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#D9D7EC',
  padding: theme.spacing(2),
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  width: '100%',


}));

const SearchInput = styled(InputBase)({
  marginLeft: '4px',
  flex: 1,
});

const SearchIconWrapper = styled('div')({
  padding: '10px',
});

// Initial rows data
const internStudents = [
  { id: 1, Id: 'INT001', studentName: 'John Doe', attendance: true, animationPlaying: false },
  { id: 2, Id: 'INT002', studentName: 'Jane Smith', attendance: false, animationPlaying: false },
  { id: 3, Id: 'INT003', studentName: 'Mike Johnson', attendance: true, animationPlaying: false },
  { id: 4, Id: 'INT004', studentName: 'Emily Brown', attendance: false, animationPlaying: false },
  { id: 5, Id: 'INT005', studentName: 'Alex Clark', attendance: true, animationPlaying: false },
];

const courseStudents = [
  { id: 1, Id: 'SDT001', studentName: 'John Doe', attendance: true, animationPlaying: false },
  { id: 2, Id: 'SDT002', studentName: 'Jane Smith', attendance: false, animationPlaying: false },
  { id: 3, Id: 'SDT003', studentName: 'Mike Johnson', attendance: true, animationPlaying: false },
  { id: 4, Id: 'SDT004', studentName: 'Emily Brown', attendance: false, animationPlaying: false },
  { id: 5, Id: 'SDT005', studentName: 'Alex Clark', attendance: true, animationPlaying: false },
];

const courses = [
  { id: 1, name: 'Full Stack Developer' },
  { id: 2, name: 'WordPress' },
  { id: 3, name: 'HR Management' },
  { id: 4, name: 'Testing' }
];


const StudentAttendance = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [rows, setRows] = useState([]);
  const [success, setSuccess] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [formType, setFormType] = useState('internship');
  const [openModal, setOpenModal] = useState(false);
  const [studentData, setStudentData] = useState({
    id: '',
    name: '',
    course: '',
    degree: '',
    department: '',
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setStudentData({ id: '', name: '', course: '', degree:'', department:'' }); // Reset selectedTrainer state
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleFetchAttendance = () => {
    console.log('Fetching attendance for date:', selectedDate);
  };

  const handleSaveAttendance = () => {
    setSuccess(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAttendanceChange = (id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, attendance: !row.attendance } : row
    );
    setRows(updatedRows);
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const updatedRows = rows.map((row) => ({ ...row, attendance: newSelectAll }));
    setRows(updatedRows);
  };

  useEffect(() => {
    if (formType === 'internship') {
      setRows(internStudents);
    } else if (formType === 'course') {
      setRows(courseStudents);
    }
  }, [formType, internStudents, courseStudents]);

  const handleDeleteRow = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, animationPlaying: true } : row
      )
    );
    setTimeout(() => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, animationPlaying: false } : row
        )
      );
    }, 2000);
  };


  const handleSuccessClose = () => {
    setSuccess(false);
  };

  const handleAddStudent = () => {
    // Handle adding student data (e.g., send to API, update state, etc.)
    console.log('Adding student:', studentData);
    handleCloseModal();
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />


      <Box sx={{ flexGrow: 1, padding: '24px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              mt: 2,
              fontWeight: 'bold',
              color: '#DC9E0B',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <BorderColorIcon sx={{ fontSize: '40px', mr: 1 }} />
            MARK ATTENDANCE
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Button
         
              variant="contained"
              color="primary"
              onClick={() => setOpenModal(true) }
              sx={{
                mr: 1,
                color: '#333',
                borderRadius: '20px',
                '&:hover': { background: 'white', color: '#AADAAA' },
                fontSize: '1.2rem',
                padding: '10px 20px',
                transition: 'all 0.3s ease',
                backgroundColor:'#AADAAA'
              }}
            >
              <PersonAddAltIcon sx={{mr:1}}/>
              Add Student
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setFormType('internship')}
              sx={{
                mr: 1,
                background: formType === 'internship' ? 'linear-gradient(to right, #FF6F61, #FFB6B6)' : 'linear-gradient(to right, #FFB6B6, #FF6F61)',
                color: '#333',
                border: formType === 'internship' ? '3px solid darkgrey' : 'none',
                boxShadow: formType === 'internship' ? '0px 6px 12px rgba(0, 0, 0, 0.5)' : 'none',
                borderRadius: '20px',
                '&:hover': { background: 'white', color: '#FF6F61' },
                fontSize: '1.2rem',
                padding: '10px 20px',
                transition: 'all 0.3s ease', // Smooth transition for hover and border changes
              }}
            >
              Internship
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => setFormType('course')}
              sx={{
                background: formType === 'course' ? 'linear-gradient(to right, #FF6F61, #FFB6B6)' : 'linear-gradient(to right, #FFB6B6, #FF6F61)',
                color: '#333',
                border: formType === 'course' ? '3px solid darkgrey' : 'none',
                boxShadow: formType === 'course' ? '0px 6px 12px rgba(0, 0, 0, 0.5)' : 'none',
                borderRadius: '20px',
                '&:hover': { background: 'white', color: '#FF6F61' },
                fontSize: '1.2rem',
                padding: '10px 20px',
                transition: 'all 0.3s ease', // Smooth transition for hover and border changes
              }}
            >
              Course
            </Button>
          </Box>

          <Container>
            <SearchContainer>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchInput
                placeholder="Search by name, intern ID"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#9A7CB0',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#9A7CB0',
                  },
                }}
                onClick={handleFetchAttendance}
              >
                Search
              </Button>
            </SearchContainer>

            <Stack direction="row" spacing={2} alignItems="center" mt={2} justifyContent='center'>
              <TextField
                label="Select Date"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '4px',
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#9A7CB0',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#9A7CB0',
                  },
                }}
                onClick={handleFetchAttendance}
              >
                Fetch Attendance
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#9A7CB0',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#9A7CB0',
                  },
                }}
                onClick={handleSaveAttendance}
              >
                Save Attendance
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ mt: 5, backgroundColor: '#F7E8A6' }}>
    <Grid container spacing={3} justifyContent="center">
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={3} key={course.id}>
          <Link
            // href={}
            sx={{
              display: 'block',
              textDecoration: 'none', // Remove underline from the link
              color: 'inherit' // Ensure the text color is inherited
            }}
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease', // Smooth transition for scaling
    '&:hover': {
      transform: 'scale(1.09)' // Scale up by 5% on hover
    }}}>
              <CardContent>
                <Typography variant="h6">
                  {course.name}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Container>

        <TableContainer component={Paper} sx={{ marginTop: '24px' }}>
          <Table sx={{ width: '100%' }} aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#ace6ef' }}>
                <TableCell style={{ paddingcenter: '8px' }}>
                </TableCell>
                <TableCell style={{ paddingcenter: '8px' }}>S/N</TableCell>
                <TableCell align="center">{formType === 'internship' ? 'INTERN ID' : 'STUDENT ID'}</TableCell>
                <TableCell align="center">Student Name</TableCell>
                <TableCell align="center">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ marginBottom: '4px' }}>Attendance</span>
                    <Checkbox
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                      sx={{
                        '&.Mui-checked': { color: 'green' },
                        transform: 'scale(1.5)'
                      }}
                    />
                  </div>
                </TableCell>

                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell></TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="center">{row.Id}</TableCell>
                  <TableCell align="center">{row.studentName}</TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={row.attendance}
                      onChange={() => handleAttendanceChange(row.id)}
                      sx={{
                        '&.Mui-checked': { color: 'green' },
                        transform: 'scale(1.5)',
                        borderRadius: '100%',
                      }}
                    />

                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteRow(row.id)}
                    >
                      <LottiePlayer
                        play={row.animationPlaying}
                        animationData={DeleteAnimation}
                        style={{ width: 40, height: 40 }}
                      />
                    </IconButton>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Dialog
        open={success}
        sx={{
          backdropFilter: 'blur(5px)', // Optional: adds a blur effect to the background
        }}
        PaperProps={{
          style: {
            backgroundColor: '#D9EBDA', // Grey background with some transparency
            borderRadius: '10px', // Rounded edges
          }
        }}
      >
        <DialogTitle sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleSuccessClose}
            sx={{
              position: 'absolute',
              center: 3,
              top: 3,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Lottie
            animationData={SuccessAnimation}
            style={{ width: 100, height: 100 }}
            loop={false}
          />
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Attendance saved successfully
          </Typography>
        </DialogContent>
      </Dialog>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter student details:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="id"
            label="ID"
            fullWidth
            value={studentData.id}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            value={studentData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="course"
            label="Course"
            fullWidth
            value={studentData.course}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="degree"
            label="Degree"
            fullWidth
            value={studentData.degree}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="department"
            label="Department"
            fullWidth
            value={studentData.department}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddStudent} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StudentAttendance;
//<a target="_blank" href="https://icons8.com/icon/00Qr877pFzQp/trash">Delete</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> icon8 delete