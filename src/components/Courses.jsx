import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import {Typography} from '@mui/material';
import LottiePlayer from 'react-lottie-player';
import DeleteAnimation from '../assets/DeleteAnimation.json'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Courses = () => {
  const rowsData = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' },
  ];
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [rows, setRows] = useState(rowsData);

  const handleEdit = (id, name) => {
    console.log(`Edit course with ID: ${id}`);
    setSelectedCourse({ id, name });
    setShowModal(true);
    // Implement your edit logic here if needed
  };

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
  

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };



  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '70px' }}>
      <Sidebar />
      
      <TableContainer>
      <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 'bold',
                color: '#DC9E0B',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <LibraryBooksIcon sx={{fontSize: '40px', marginRight:'10px'}}/>
              COURSES
            </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ACE6EF' }}>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(row.id, row.name)}>
                    <EditIcon />
                  </IconButton>
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

      {/* Modal */}
      {selectedCourse && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField
              fullWidth
              label="Course Name"
              defaultValue={selectedCourse.name}
              variant="outlined"
              // You can add onChange handler here if needed
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Box>
  );
};

export default Courses;
