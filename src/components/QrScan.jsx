import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./QrScan";
import QrScanner from "qr-scanner";
import QrFrame from "../assets/qr-frame.svg";
import Sidebar from "./Navbar";
import { Box, Typography } from "@mui/material";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const QrReader = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const navigate = useNavigate();

  // Success
  const onScanSuccess = (result) => {
    console.log(result);
    navigate('/student_detail', { state: { scannedData: result?.data } });
  };

  // Fail
  const onScanFail = (err) => {
    console.error("QR scan failed:", err);
  };

  useEffect(() => {
    if (videoEl.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl.current || undefined,
      });

      scanner.current.start().then(() => setQrOn(true)).catch((err) => {
        console.error("Failed to start QR scanner:", err);
        setQrOn(false);
      });
    }
    return () => {
      if (scanner.current) {
        scanner.current.stop();
        scanner.current = null;
      }
    };
  }, [videoEl.current]);

  useEffect(() => {
    if (!qrOn) {
      alert("Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.");
    }
  }, [qrOn]);

  return (
    <div>
      <Sidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '60px', alignItems: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            marginTop: '60px',
            marginBottom: '-30px',
            fontWeight: 'bold',
            color: '#DC9E0B',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <QrCodeScannerIcon sx={{fontSize: '30px', marginRight: '10px'}}/>
          SCAN THE CODE
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginTop: '60px',
            marginBottom: '-40px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Scan the QR code to display the student details
        </Typography>

        <Box
          className="qr-reader"
          sx={{
            height: '500px',
            width: '500px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <video ref={videoEl} style={{ height: '100%', width: '100%' }}></video>
          <Box
            ref={qrBoxEl}
            className="qr-box"
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              width: '150px',
              pointerEvents: 'none'
            }}
          >
            <img
              src={QrFrame}
              alt="Qr Frame"
              width={150}
              height={150}
              className="qr-frame"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default QrReader;
