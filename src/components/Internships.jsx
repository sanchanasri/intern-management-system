import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BadgeIcon from '@mui/icons-material/Badge';
import Sidebar from './Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import LottiePlayer from 'react-lottie-player';
import DeleteAnimation from '../assets/DeleteAnimation.json'

const Internships = () => {
    const rowsData = [
        { id: 1, name: 'Full Stack Development' },
        { id: 2, name: 'WordPress' },
        { id: 3, name: 'Technical Trainee' },
        { id: 4, name: 'Data Science' },
      ];
  const [showModal, setShowModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [rows, setRows] = useState(rowsData);
  const handleEdit = (id, name) => {
    setSelectedInternship({ id, name });
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
    setSelectedInternship(null);
  };

  const iconStyle = {
    transition: 'transform 0.3s ease',
  };

  const iconHoverStyle = {
    transform: 'scale(1.2)', // Adjust the scale factor as needed
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
          <BadgeIcon sx={{fontSize: '35px', marginRight:'10px'}}/>
          INTERNSHIPS
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ACE6EF' }}>
              <TableCell>Internship ID</TableCell>
              <TableCell>Internship Name</TableCell>
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
                  <IconButton
                    onClick={() => handleEdit(row.id, row.name)}
                    style={iconStyle}
                    sx={{
                      '&:hover': {
                        ...iconHoverStyle,
                      },
                    }}
                  >
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

      {selectedInternship && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Internship</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField
              fullWidth
              label="Internship Name"
              defaultValue={selectedInternship.name}
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

export default Internships;
