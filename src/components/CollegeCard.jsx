import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import "primeicons/primeicons.css";
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;
  return `#${(0x1000000 + (R<255?R<1?0:R:255) * 0x10000 + (G<255?G<1?0:G:255) * 0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1).toUpperCase()}`;
};

const CardComponent = ({ iconClass, title, bgColor, number }) => {
  const lighterBgColor = lightenColor(bgColor, 40);

  return (
    <Card
      sx={{
        width: '300px', // Fixed width for cards
        backgroundColor: bgColor,
        textAlign: 'center',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 C150,150 350,0 500,100 L500,00 L0,0 Z' fill='${lighterBgColor.replace("#", "%23")}' /%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        '&:hover': {
          transform: 'scale(1.05)', // Enlarge the card on hover
        },
      }}
    >
      <CardActionArea>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '68px' }}>
          <Typography variant="body1" component="div" sx={{ fontSize: '60px' }}>
            <i className={iconClass} style={{ fontSize: '38px', color: bgColor }}></i>
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="h5" component="div" sx={{ color: '#fff', fontWeight: 'bold' }}>
            {number}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function ActionAreaCard() {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: '20px', 
      justifyContent: 'center', 
      backgroundColor: '#F5F5F5', 
      padding: '20px', 
      flexWrap: 'wrap', // Allow wrapping of cards
      alignItems: 'flex-start' // Align items at the start of the container
    }}>
      <CardComponent iconClass="pi pi-book" title="Courses" bgColor='#F17878' number={5} />
      <CardComponent iconClass="pi pi-users" title="Students" bgColor='#81C784' number={50} />
      <CardComponent iconClass="pi pi-spinner-dotted" title="Internships" bgColor='#F7C952' number={"7"} />
    </Box>
  );
}
