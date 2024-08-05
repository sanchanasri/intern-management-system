import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormIcon from '@mui/icons-material/Description';
import QRCodeIcon from '@mui/icons-material/QrCode';
import AttendanceIcon from '@mui/icons-material/AssignmentTurnedIn';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Logo from "../assets/Pinesphere.png";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const drawerWidth = 215;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp

  }),
  overflowX: 'hidden',
  backgroundColor: '#68676A',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    backgroundColor: '#68676A',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'transparent',
  color: '#000000',
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [formsOpen, setFormsOpen] = React.useState(false);
  const [attendanceReportsOpen, setAttendanceReportsOpen] = React.useState(false);

  const handleAttendanceReportsClick = () => {
    setAttendanceReportsOpen(!attendanceReportsOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setFormsOpen(false);
    setAttendanceReportsOpen(false);
  };

  const handleFormsClick = () => {
    setFormsOpen(!formsOpen);
  };
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ background: 'linear-gradient(90deg, #D6D0E8, #DAE9F5, #D6D0E8)', }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                background: '#68676A',
                '&:hover': {
                  backgroundColor: '#959595',
                },
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
                style={{ marginRight: '8px' }}
              />

              <Typography
                variant="h4"
                noWrap
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: "#368FCE",
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  whiteSpace: 'normal', // Allow text to wrap
                  wordWrap: 'break-word', // Break long words
                 
                }}
              >
                PINESPHERE INTERNSHIP PORTAL
              </Typography>

            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <DrawerHeader>
            {open && (
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <img
                    src={Logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%', cursor: 'pointer' }}
                  />
                </Link>
              </Box>
            )}
            <IconButton onClick={handleDrawerClose}>
              {open ? <ChevronLeftIcon sx={{ color: 'white' }} /> : ""}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <div onMouseEnter={handleDrawerOpen}>
              <ListItemButton
                onClick={handleFormsClick}
                sx={{
                  backgroundColor: formsOpen ? '#959595' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#959595',
                    '& .MuiListItemIcon-root': {
                      transition: 'transform 0.3s', // Smooth transition
                    },
                    '&:hover .MuiListItemIcon-root': {
                      transform: 'translateX(8px)', // Move icon to the right
                    },
                  },
                }}
              >
                <ListItemIcon>
                  <FormIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Forms"
                  sx={{ color: 'white' }}
                />
                {formsOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
              </ListItemButton>
              <Collapse in={formsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton component={Link} to="/add_student" sx={{
                    pl: 4, color: 'white', '&:hover': {
                      backgroundColor: '#959595',
                      '& .MuiListItemIcon-root': {
                        transition: 'transform 0.3s', // Smooth transition
                      },
                      '&:hover .MuiListItemIcon-root': {
                        transform: 'translateX(8px)', // Move icon to the right
                      },
                    }
                  }}>
                    <ListItemIcon>
                      <PersonIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Add Students" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/add_other" sx={{
                    pl: 4, color: 'white', '&:hover': {
                      backgroundColor: '#959595',
                      '& .MuiListItemIcon-root': {
                        transition: 'transform 0.3s', // Smooth transition
                      },
                      '&:hover .MuiListItemIcon-root': {
                        transform: 'translateX(8px)', // Move icon to the right
                      },
                    }
                  }}>
                    <ListItemIcon>
                      <SchoolIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="College and Course" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton component={Link} to="/add_user" sx={{
                '&:hover': {
                  backgroundColor: '#959595',
                },
                '& .MuiListItemIcon-root': {
                  transition: 'transform 0.3s', // Smooth transition
                },
                '&:hover .MuiListItemIcon-root': {
                  transform: 'translateX(8px)', // Move icon to the right
                },
              }}>
                <ListItemIcon>
                  <PersonAddAltIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Add Super User" sx={{ color: 'white' }} />
              </ListItemButton>

              <ListItemButton component={Link} to="/manage" sx={{
                '&:hover': {
                  backgroundColor: '#959595',
                },
                '& .MuiListItemIcon-root': {
                  transition: 'transform 0.3s', // Smooth transition
                },
                '&:hover .MuiListItemIcon-root': {
                  transform: 'translateX(8px)', // Move icon to the right
                },
              }}>
                <ListItemIcon>
                  <WorkIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Manage Users" sx={{ color: 'white' }} />
              </ListItemButton>


              <ListItemButton component={Link} to="/qr_scanner" sx={{
                '&:hover': {
                  backgroundColor: '#959595',
                },
                '& .MuiListItemIcon-root': {
                  transition: 'transform 0.3s', // Smooth transition
                },
                '&:hover .MuiListItemIcon-root': {
                  transform: 'translateX(8px)', // Move icon to the right
                },
              }}>
                <ListItemIcon>
                  <QRCodeIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="QR Code" sx={{ color: 'white' }} />
              </ListItemButton>

              <ListItemButton
                onClick={handleAttendanceReportsClick}
                sx={{
                  backgroundColor: attendanceReportsOpen ? '#959595' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#959595',
                  },
                  '& .MuiListItemIcon-root': {
                    transition: 'transform 0.3s', // Smooth transition
                  },
                  '&:hover .MuiListItemIcon-root': {
                    transform: 'translateX(8px)', // Move icon to the right
                  },
                }}
              >
                <ListItemIcon>
                  <AttendanceIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Attendance" sx={{ color: 'white' }} />
                {attendanceReportsOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
              </ListItemButton>
              <Collapse in={attendanceReportsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton component={Link} to="/student_attendance" sx={{
                    pl: 4, color: 'white', '&:hover': {
                      backgroundColor: '#959595',
                      '& .MuiListItemIcon-root': {
                        transition: 'transform 0.3s', // Smooth transition
                      },
                      '&:hover .MuiListItemIcon-root': {
                        transform: 'translateX(8px)', // Move icon to the right
                      },
                    }
                  }}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <BorderColorIcon />
                    </ListItemIcon>
                    <ListItemText primary="Student Attendance" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/reports" sx={{
                    pl: 4, color: 'white', '&:hover': {
                      backgroundColor: '#959595',
                      '& .MuiListItemIcon-root': {
                        transition: 'transform 0.3s', // Smooth transition
                      },
                      '&:hover .MuiListItemIcon-root': {
                        transform: 'translateX(8px)', // Move icon to the right
                      },
                    }
                  }}>
                    <ListItemIcon>
                      <SummarizeIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
          </List>

          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ padding: '8px' }}>
              <div onMouseEnter={handleDrawerOpen}>
                <div onClick={handleDrawerOpen}>
                  <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '8px' }}>
                    <Avatar alt="Avatar Alt Text" src="../assets/avatar.jpg" />
                    {open && (<Typography variant="body1" sx={{ marginLeft: 1, color: 'white' }}>User Name</Typography>)}
                  </Box>


                  <ListItemButton
                    component={Link}
                    to="/log_in"
                    sx={{
                      '&:hover': {
                        backgroundColor: '#959595',
                      },
                      position: 'relative', // Needed for positioning the icon
                      '& .MuiListItemIcon-root': {
                        transition: 'transform 0.3s ease', // Smooth transition
                      },
                      '&:hover .MuiListItemIcon-root': {
                        transform: 'translateX(8px)', // Move icon to the right
                      },
                      marginLeft: '-7px'
                    }}
                  >
                    <ListItemIcon>
                      <LogoutIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" sx={{ color: 'white' }} />
                  </ListItemButton>
                </div>
              </div>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
