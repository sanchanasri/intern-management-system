import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from './Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import {Typography} from '@mui/material';
import LottiePlayer from 'react-lottie-player';
import DeleteAnimation from '../assets/DeleteAnimation.json'
import BoyIcon from '@mui/icons-material/Boy';

const Trainers = () => {
  const rowsData = [
    { id: 1, name: 'Trainer 1', assignedCourse: 'Course A' },
    { id: 2, name: 'Trainer 2', assignedCourse: 'Course B' },
    { id: 3, name: 'Trainer 3', assignedCourse: 'Course C' },
    { id: 4, name: 'Trainer 4', assignedCourse: 'Course D' },
  ];
  const [showModal, setShowModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState({ id: '', name: '', assignedCourse: '' });
  const [rows, setRows] = useState(rowsData);

  const handleEdit = (id, name, assignedCourse) => {
    setSelectedTrainer({ id, name, assignedCourse });
    setShowModal(true);
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
    setSelectedTrainer({ id: '', name: '', assignedCourse: '' }); // Reset selectedTrainer state
  };



  return (
    <Box sx={{ display: 'flex', marginTop: '70px' }}>
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
              <BoyIcon sx={{fontSize: '40px'}}/>
              TRAINERS
            </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ACE6EF' }}>
              <TableCell>Trainer ID</TableCell>
              <TableCell>Trainer Name</TableCell>
              <TableCell>Assigned Course</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.assignedCourse}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(row.id, row.name, row.assignedCourse)}>
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

      {showModal && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Trainer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField
              fullWidth
              label="Trainer Name"
              defaultValue={selectedTrainer.name}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
            <TextField
              fullWidth
              label="Assigned Course"
              defaultValue={selectedTrainer.assignedCourse} // Display the assigned course
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Box>
  );
};

export default Trainers;
