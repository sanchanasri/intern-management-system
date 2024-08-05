import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        background: 'linear-gradient(90deg, #D6D0E8, #DAE9F5, #D6D0E8)',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="subtitle1"
        color="#368FCE"
        className="footer-text"
      >
        {`© Copyright 2023. All Rights Reserved by Pinesphere`}
      </Typography>
    </Box>
  );
};

export default Footer;
