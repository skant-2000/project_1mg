import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { rightBox, textField, btn } from "./styles"
import { alpha, styled } from '@mui/material/styles';
import { AuthContext } from '../../contextAPI/AuthContext';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    'label':{
      color: "black"
    }
    
  });
  const ButtonField = styled(Button)({
    '&:hover': {
      backgroundColor: "rgb(255,111,97)"
    }
    
  });
  
const OtpPage = () => {
const{signupOtp, setSignupOtp, handleVerifyOtp} = React.useContext(AuthContext)
    return (
        <>
            <Box sx={rightBox}>
                <h2 style={{ marginTop: 0, marginBottom: "10px" }}>Verify otp</h2>
                <p style={{ marginTop: 0, fontSize: "12px", marginBottom: "3rem" }}>Provide OTP sent to 6261699668</p>
                {/* <TextField id="standard-basic" label="Enter email id or mobile number" variant="standard" sx={textField}/> */}
                <CssTextField
                    error
                    id="standard-error-helper-text"
                    label="One time password"
                    variant="standard"
                    sx={textField}
                    value={signupOtp}
                    onChange={(e) => setSignupOtp(e.target.value)}
                />
                <ButtonField variant="contained" sx={btn} onClick={handleVerifyOtp}>Done</ButtonField>
                <p style={{ fontSize: "14px", width: "48%", margin: "10px auto", color: "rgb(255,111,97)", cursor: "pointer", fontWeight: "600" }}>Need help? get in touch</p>
            </Box>
        </>
    )
}

export default OtpPage