import React, { useState } from 'react';
import Sidebar from './Navbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
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

const rowsData = [
  { id: 1, internId: 'INT001', studentName: 'John Doe', phoneNumber: '1234567890', aadharNumber: '1234-5678-9012', course: 'Web Development', trainerName: 'Alice Smith', duration: '3 months', courseMode: 'Online', qrCode: 'ABC123', courseStarted: true, startDate: '2024-07-15' },
  { id: 2, internId: 'INT002', studentName: 'Jane Smith', phoneNumber: '9876543210', aadharNumber: '9876-5432-1098', course: 'Data Science', trainerName: 'Bob Johnson', duration: '6 months', courseMode: 'Offline', qrCode: 'XYZ456', courseStarted: false, startDate: '2024-08-01' },
  // Add more rows as needed
];

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const rows =rowsData;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
            ><PeopleIcon sx={{fontSize: '40px', marginRight: '10px'}}/>
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
        </Box>

        <TableContainer component={Paper} sx={{ marginTop: '24px' }}>
          <Table sx={{ width:'100%' }} aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#ACE6EF' }}>
                <TableCell style={{ paddingRight: '5px' }}>S/N</TableCell>
                <TableCell align="right">Intern Id</TableCell>
                <TableCell align="right">Student Name</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">Aadhar Number</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Trainer Name</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="right">Course Mode</TableCell>
                <TableCell align="right">QR Code</TableCell>
                <TableCell align="right">Course Started</TableCell>
                <TableCell align="right">Started Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="right">{row.internId}</TableCell>
                  <TableCell align="right">{row.studentName}</TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.aadharNumber}</TableCell>
                  <TableCell align="right">{row.course}</TableCell>
                  <TableCell align="right">{row.trainerName}</TableCell>
                  <TableCell align="right">{row.duration}</TableCell>
                  <TableCell align="right">{row.courseMode}</TableCell>
                  <TableCell align="right">{row.qrCode}</TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.courseStarted} disabled />
                  </TableCell>
                  <TableCell align="right">{row.startDate}</TableCell>
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
