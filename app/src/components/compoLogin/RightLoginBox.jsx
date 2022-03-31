import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { rightBox, textField, btn } from "./styles"
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

const RightLoginBox = () => {
   const{login, setLogin ,handleLogin} = React.useContext(AuthContext)
  return (
    <>
         <Box sx={rightBox}>
            <h2 style={{ marginTop: 0, marginBottom: "10px" }}>Login</h2>
            <p style={{ marginTop: 0, fontSize: "12px", marginBottom: "3rem" }}>Get access to your orders, lab tests & doctor consultations</p>
            {/* <TextField id="standard-basic" label="Enter email id or mobile number" variant="standard" sx={textField}/> */}
            <CssTextField
              id="standard-error-helper-text"
              label="Enter email ID or mobile number"
              variant="standard"
              sx={textField}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <ButtonField variant="contained" sx={btn} onClick={handleLogin}>Send otp</ButtonField>
            <p style={{width: "50%", margin: "10px auto", fontSize: "15px", color: "rgb(106,106,106)"}}>New on 1mg?<span style={{color: "rgb(255,111,97)", cursor: "pointer"}}> sign up</span></p>
            <p style={{width: "70%", margin: "10px auto 1rem auto", fontSize: "15px", color: "rgb(106,106,106)"}}>Have a corporate account?<span style={{color: "rgb(255,111,97)", cursor: "pointer"}}> click here</span></p>
            <p style={{fontSize: "12px", width: "50%", margin:"5px auto", color: "rgb(106,106,106)"}}>By logging in, you agree to our</p>
            <p style={{fontSize: "12px", width: "60%", margin:"auto", color: "rgb(106,106,106)",textDecoration:"underline", cursor: "pointer" }}>Terms and conditions & privacy policy</p>
            <p style={{fontSize: "14px", width: "48%", margin:"10px auto", color: "rgb(255,111,97)", cursor: "pointer", fontWeight: "600" }}>Need help? get in touch</p>
          </Box>
    </>
  )
}

export default RightLoginBox