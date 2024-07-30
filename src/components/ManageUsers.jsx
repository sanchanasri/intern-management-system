import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Sidebar from './Navbar';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import College from '../assets/College.png';
import Course from '../assets/Course.png';
import Trainer from '../assets/Trainer_3.png';
import Students from '../assets/Students.png';
import Internship from '../assets/Internship.png';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  backgroundImage: 'url(path/to/your/image.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  paddingTop: '50px',
  paddingBottom: '20px',
  overflow: 'hidden'
}));

const NoUnderlineLink = styled(Link)({
  textDecoration: 'none',
});

const StyledCard = styled(Card)(({ theme }) => ({
  width: '110%',
  height: '120%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
  boxShadow: `0 4px 8px rgba(0, 0, 0, 0.7)`, // Light shadow effect
  margin: '10px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&:hover img': {
    transform: 'scale(1.3)',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const TextContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '30%',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledImage = styled('img')({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ManageUsers = () => {
  const text = "MANAGE USERS".split("");
  return (
    <Box sx={{ display: 'flex', height: '140vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <BackgroundContainer>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              textAlign: 'center',
            }}
          >
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
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{""}
                </motion.span>
              ))}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
                <NoUnderlineLink to='/manage/students'>
                  <StyledCard>
                    <ImageContainer sx={{ backgroundColor: '#E4F1EE' }}>
                      <StyledImage src={Students} alt="Students" />
                    </ImageContainer>
                    <TextContainer>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        STUDENTS
                      </Typography>
                    </TextContainer>
                  </StyledCard>
                </NoUnderlineLink>

                <NoUnderlineLink to='/manage/colleges'>
                  <StyledCard>
                    <ImageContainer sx={{ backgroundColor: '#DEDAF4' }}>
                      <StyledImage src={College} alt="College" />
                    </ImageContainer>
                    <TextContainer>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        COLLEGES
                      </Typography>
                    </TextContainer>
                  </StyledCard>
                </NoUnderlineLink>

                <NoUnderlineLink to='/manage/internships'>
                  <StyledCard>
                    <ImageContainer sx={{ backgroundColor: '#FFD7A9' }}>
                      <StyledImage src={Internship} alt="Internship" />
                    </ImageContainer>
                    <TextContainer>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        INTERNSHIPS
                      </Typography>
                    </TextContainer>
                  </StyledCard>
                </NoUnderlineLink>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '60px' , padding:10}}>
                <NoUnderlineLink to='/manage/trainers'>
                  <StyledCard>
                    <ImageContainer sx={{ backgroundColor: '#FDFFB6' }}>
                      <StyledImage src={Trainer} alt="Trainer" />
                    </ImageContainer>
                    <TextContainer>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        TRAINERS
                      </Typography>
                    </TextContainer>
                  </StyledCard>
                </NoUnderlineLink>

                <NoUnderlineLink to='/manage/courses'>
                  <StyledCard>
                    <ImageContainer sx={{ backgroundColor: '#FFADAD' }}>
                      <StyledImage src={Course} alt="Course" />
                    </ImageContainer>
                    <TextContainer>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        COURSES
                      </Typography>
                    </TextContainer>
                  </StyledCard>
                </NoUnderlineLink>
              </Box>
            </Box>
          </Box>
        </BackgroundContainer>
      </Box>
    </Box>
  );
};

export default ManageUsers;
