// Home.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CollegesCard from './CollegeCard';
import Sidebar from './Navbar';
import { Typography } from '@mui/material';
import { motion } from "framer-motion";
import { Card, CardContent } from '@mui/material';
import Course from '../assets/Courses.png'
import Internship from '../assets/Internships.png'


const StyledCard = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(4),
  borderRadius: '0px',
  margin: theme.spacing(0),
  flexGrow: 1,
}));

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: drawerWidth,
  marginTop: 60
}));


const drawerWidth = 0;

const Home = () => {
  const text = "INTERN MANAGEMENT SYSTEM".split("");
  const cardsData = [
    { title: 'Total', number: 15, bg: '#74CCE8' },
    { title: 'Completers', number: 10, bg: '#F7DB70' },
    { title: 'Non-Completers', number: 5, bg: '#D6A3DC' },
  ];

  const coursecardsData = [
    { title: 'Total', number: 15, bg: '#FFE5C2' },
    { title: 'Completers', number: 10, bg: '#EAD2E0' },
    { title: 'Non-Completers', number: 5, bg: '#D1DCE2' },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '480px',
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Box>
      <Sidebar />

      <MainContent>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#368FCE', // Pastel grey color
            textAlign: 'center',
            width: '100%',
            fontFamily: 'Arial, sans-serif', // Change the font family
            fontSize: '2rem', // Change the font size
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
        <StyledCard>
          <h2>Welcome, Admin</h2>
          <CollegesCard />
        </StyledCard>

        <Box sx={{ backgroundColor: '#', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '70px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '60vh', padding: 2, alignItems: 'center', justifyContent: 'center', border: '10px' }}>
            <Card sx={{ marginBottom: 2, width: '300px', height: '70px', border: 'none', boxShadow: 'none', display: 'flex', padding: 1 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',flex: 1 }}>
                <img src={Course} alt="Icon" style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#368FCE', fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>
                  COURSES
                </Typography>
              </CardContent>
            </Card>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '250px' }}>
              {coursecardsData.map((card, index) => (
                <motion.div
                  className="card"
                  initial={{ opacity: 0.3, x: -300 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: index * 0.2 } }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Card sx={{ marginBottom: 1, backgroundColor: card.bg }}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6">{card.title}</Typography>
                      <Typography variant="h6">{card.number}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', height: '60vh', padding: 2, alignItems: 'center', justifyContent: 'center', border: '10px' }}>
            <Card sx={{ marginBottom: 2, width: '300px', height: '70px', border: 'none', boxShadow: 'none', display: 'flex', padding: 1 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',flex: 1 }}>
                <img src={Internship} alt="Icon" style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#368FCE', fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>
                  INTERNSHIP
                </Typography>
              </CardContent>
            </Card>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '250px' }}>
              {cardsData.map((card, index) => (
                <motion.div
                  className="card"
                  initial={{ opacity: 0.3, x: 300 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: index * 0.2 } }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Card sx={{ marginBottom: 1, backgroundColor: card.bg }}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6">{card.title}</Typography>
                      <Typography variant="h6">{card.number}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </MainContent>
    </Box>
  );
};

export default Home;
// course icon -<a href="https://www.freepik.com/icon/online-learning_2436855">Icon by Freepik</a>
//<a href="https://www.freepik.com/icon/worker_3476337#fromView=search&page=1&position=2&uuid=66e128ae-e306-4b87-9624-6a6c57ab2674">Icon by Flat Icons</a>