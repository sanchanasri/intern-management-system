import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from './Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import {Typography} from '@mui/material';
import DeleteAnimation from '../assets/DeleteAnimation.json'
import LottiePlayer from 'react-lottie-player';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Colleges = () => {
  const rowsData = [
    { id: 1, name: 'College 1' },
    { id: 2, name: 'College 2' },
    { id: 3, name: 'College 3' },
    { id: 4, name: 'College 4' },
  ];
  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [rows, setRows] = useState(rowsData);

  const handleEdit = (id, name) => {
    setSelectedCollege({ id, name });
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
    setSelectedCollege(null);
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
                width: '100%',
                textAlign: 'center',
              }}
            >
              <AccountBalanceIcon sx={{fontSize: '40px', marginRight: '10px'}}/>
              COLLEGES
            </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ACE6EF' }}>
              <TableCell>College ID</TableCell>
              <TableCell>College Name</TableCell>
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

      {selectedCollege && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit College</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField
              fullWidth
              label="College Name"
              defaultValue={selectedCollege.name}
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

export default Colleges;
