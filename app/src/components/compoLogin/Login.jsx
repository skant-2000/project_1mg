import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { style, styleBtn, leftBox, rightBox, textField, btn } from "./styles"
import {LeftSlider} from './LeftSlider';
import { AuthContext } from '../../contextAPI/AuthContext';
import RightLoginBox from './RightLoginBox';
import LoginOtpPage from "./LoginOtpPage";
const Login = () => {
 const{handleOpen, handleClose, open, isLogin} = React.useContext(AuthContext)

  return (
    <div>
      <Button onClick={handleOpen} style={{color: "black", fontSize: "13px"}}>Login</Button>
      {open && (<><Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose} sx={styleBtn}>X</Button>
          <Box sx={leftBox}>
            <LeftSlider />
          </Box>
         {isLogin? <RightLoginBox />:<LoginOtpPage />}
        </Box>
      </Modal></>)}
    </div>
  );
}

export default Login