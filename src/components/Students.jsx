import React, { useState } from 'react';
import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Sidebar from './Navbar';
import Checkbox from '@mui/material/Checkbox';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

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
  backgroundColor: '#D9D7EC', // Light lavender background
  padding: theme.spacing(2),
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow effect
  width: '100%',


}));



const SearchInput = styled(InputBase)({
  marginLeft: '4px',
  flex: 1,
});

const SearchIconWrapper = styled('div')({
  padding: '10px',
});


const Students = () => {
const rowsData = [
  { id: 1, internId: 'INT001', studentName: 'John Doe', phoneNumber: '1234567890', aadharNumber: '1234-5678-9012', course: 'Web Development', trainerName: 'Alice Smith', duration: '3 months', courseMode: 'Online', qrCode: 'ABC123', courseStarted: true, startDate: '2024-07-15' },
  { id: 2, internId: 'INT002', studentName: 'Jane Smith', phoneNumber: '9876543210', aadharNumber: '9876-5432-1098', course: 'Data Science', trainerName: 'Bob Johnson', duration: '6 months', courseMode: 'Offline', qrCode: 'XYZ456', courseStarted: false, startDate: '2024-08-01' },

];

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'auto' }}>
      <Typography
              variant="h4"
              sx={{
                mt:7,
                fontWeight: 'bold',
                color: '#DC9E0B',
                textAlign: 'center',
                width: '100%',
                mb:4
              }}
            >
              <GroupIcon sx={{fontSize:'40px', mr:2}}/>
              STUDENTS
            </Typography>
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

            >
             Search
            </Button>
          </SearchContainer>

          <Stack direction="row" spacing={2} alignItems="center" mt={2}  justifyContent= 'center'>
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
            >
              Download Excel
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

            >
              Download PDF
            </Button>
          </Stack>
          </Container>


        <TableContainer sx={{ marginTop: '20px', flex: 1 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#ACE6EF' }}>
              <TableRow>
                <TableCell >Intern Id</TableCell>
                <TableCell >Student Name</TableCell>
                <TableCell >Phone Number</TableCell>
                <TableCell >Aadhar Number</TableCell>
                <TableCell >Course</TableCell>
                <TableCell>Trainer Name</TableCell>
                <TableCell >Duration</TableCell>
                <TableCell >Course Mode</TableCell>
                <TableCell >QR Code</TableCell>
                <TableCell >Course Started</TableCell>
                <TableCell >Started Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
               {rowsData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell >{row.internId}</TableCell>
                  <TableCell >{row.studentName}</TableCell>
                  <TableCell >{row.phoneNumber}</TableCell>
                  <TableCell >{row.aadharNumber}</TableCell>
                  <TableCell >{row.course}</TableCell>
                  <TableCell >{row.trainerName}</TableCell>
                  <TableCell >{row.duration}</TableCell>
                  <TableCell >{row.courseMode}</TableCell>
                  <TableCell >{row.qrCode}</TableCell>
                  <TableCell >
                    <Checkbox checked={row.courseStarted} disabled />
                  </TableCell>
                  <TableCell >{row.startDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
    </Box>
  );
};

export default Students;
