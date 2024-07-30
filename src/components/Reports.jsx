import React, { useState } from 'react';
import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Sidebar from './Navbar';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MailIcon from '@mui/icons-material/Mail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import successAnimation from '../assets/EmailSuccessAnimation.json'
import Lottie from 'lottie-react';
import {  Dialog, DialogContent, Typography,DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from '@mui/material';


const Reports = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [emailSuccess, setEmailSuccess]= useState(false);
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  const students = [
    { id: 1, internId: 'INT001', name: 'John Doe', attendance: [true, false, true] },
    { id: 2, internId: 'INT002', name: 'Jane Smith', attendance: [false, false, true] },
    // Add more students as needed, ensure each student has an 'attendance' array with boolean values
  ];

  const handleFilter = () => {
    // Implement filtering logic based on startDate and endDate
    // Fetch data or filter existing data based on selected date range
  };

  const handleEmailSuccess = () => {
    setEmailSuccess(true);
  };

  const handleClose = () => {
    setEmailSuccess(false);
  };
  
  const renderDateHeaders = () => {
    return days.map(day => (
      <TableCell key={day}>Day {day}</TableCell>
    ));
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'auto' }}>
      <Typography
              variant="h4"
              sx={{
                mb: -5,
                mt:10,
                fontWeight: 'bold',
                color: '#DC9E0B',
                textAlign: 'center',
                width: '100%',
              }}
            >
              REPORT
            </Typography>
        <Stack direction="row" spacing={2} sx={{ marginTop: '90px' }}>
       
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#9A7CB0', 
              color: 'white', 
              '&:hover': {
                backgroundColor: 'white', 
                color: '#9A7CB0'
              }
            }} 
            onClick={() => {}}
          >
            Download Excel
            <ListAltIcon />
          </Button>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#9A7CB0', 
              color: 'white', 
              '&:hover': {
                backgroundColor: 'white', 
                color: '#9A7CB0'
              }
            }} 
            onClick={() => {}}
          >
            Download PDF
            <PictureAsPdfIcon />
          </Button>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#9A7CB0', 
              color: 'white', 
              '&:hover': {
                backgroundColor: 'white', 
                color: '#9A7CB0'
              }
            }} 
            onClick={handleEmailSuccess}
          >
            Send Email
            <MailIcon />
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ marginTop: '50px' }}>
          <TextField
            id="startDate"
            label="From Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="endDate"
            label="To Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#9A7CB0', 
              color: 'white', 
              '&:hover': {
                backgroundColor: 'white', 
                color: '#9A7CB0'
              }
            }} 
            onClick={handleFilter}
          >
            Filter
          </Button>
        </Stack>
        <TableContainer sx={{ marginTop: '20px', flex: 1 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#ACE6EF' }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Intern ID</TableCell>
                <TableCell>Name</TableCell>
                {renderDateHeaders()}
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map(student => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.internId}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  {days.map((day, index) => (
                    <TableCell key={day}>
                      {student.attendance[index] !== undefined ? (
                        student.attendance[index] ? (
                          <CheckIcon style={{ color: 'black' }} />
                        ) : (
                          <ClearIcon style={{ color: 'red' }} />
                        )
                      ) : null}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Dialog
        open={emailSuccess}
        sx={{
          backdropFilter: 'blur(5px)', 
        }}
        PaperProps={{
          style: {
            backgroundColor: '#D9EBDA', 
            borderRadius: '10px', 
          }
        }}
      >
        <DialogTitle sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 3,
              top: 3,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '350px' }}>
        <Lottie
            animationData={successAnimation}
            style={{ width: 100, height: 100 }}
            loop={false} // Ensure the animation does not loop
          />
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Email sent successfully!
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Reports;
