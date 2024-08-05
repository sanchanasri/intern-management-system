import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';

const courses = [
  { id: 1, name: 'Mathematics', students: 30, day: 23, daysLeft: 5 },
  { id: 2, name: 'History', students: 25, day: 23, daysLeft: 10 },
  { id: 3, name: 'Computer Science', students: 40, day: 23, daysLeft: 3 },
  { id: 4, name: 'Physics', students: 22, day: 23, daysLeft: 7 },
  { id: 5, name: 'Chemistry', students: 35, day: 23, daysLeft: 2 },
];

const DetailsContainer = ({ color1, color2 }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '100%' }}>
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} style={{ padding: '0 8px' }}>
              <Paper
                style={{
                  height: '100%',
                  width: '70%',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 4px rgba(0,0,0,0)',
                  transition: 'transform 0.3s ease-in-out',
                  marginRight: '20px',
                  textAlign: 'center',
                  position: 'relative', // Ensure the Paper component is positioned relative
                  overflow: 'hidden', // Hide overflowing content
                  border: '1px solid rgba(0, 0, 0, 0.2)', 
                }}
              >
                {/* Text Content */}
                <div style={{ position: 'relative', zIndex: 1 }}> {/* Ensure text is above the boxes */}
                  <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Students: {course.students}
                  </Typography>
                  <Divider
                    style={{
                      margin: '8px 0',
                      width: '100%',
                      backgroundColor: '#000', // Set color for visibility
                      height: '1px', // Thickness of the divider
                    }}
                  />
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Day {course.day}
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Days Left: {course.daysLeft}
                  </Typography>
                </div>
                
                <div
                  style={{
                    position: 'absolute',
                    top: 4, // Position boxes at the bottom of the Paper
                    left: 0,
                    width: '30%',
                    height: '50%',
                    backgroundColor: color2, // Apply color2
                    transform: 'rotate(-15deg)', // Tilt the box
                    transformOrigin: 'bottom left',
                    zIndex: 0, // Ensure this box is behind the text
                    borderRadius: '8px',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 20, // Position the second box with a slight offset
                    left: -50,
                    width: '30%',
                    height: '50%',
                    backgroundColor: color1, // Apply color1
                    transform: 'rotate(15deg)', // Tilt the box
                    transformOrigin: 'bottom left',
                    zIndex: 0, // Ensure this box is behind the text
                    borderRadius: '8px',
                  }}
                />
              </Paper>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DetailsContainer;
