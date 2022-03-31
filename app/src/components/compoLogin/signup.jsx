import * as React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { AuthContext } from '../../contextAPI/AuthContext';

import { style, styleBtn, leftBox} from "./styles"
import {LeftSlider} from './LeftSlider';
import RightBox from './RightBox';
import OtpPage from './OtpPage';

const Signup = () => {

const { isRegiter, handleRegister, handleOpen1, handleClose1, open1, handleOpen2} = React.useContext(AuthContext)
  
  return (
    <div>
      <Button onClick={handleOpen2} style={{color: "black", fontSize: "13px"}}>Signup</Button>
      {open1 && (<><Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose1} sx={styleBtn}>X</Button>
          <Box sx={leftBox}>
            <LeftSlider />
          </Box>
          {!isRegiter?<RightBox handleRegister={handleRegister}/> : <OtpPage />}
        </Box>
      </Modal></>)}
    </div>
  );
}

export default Signup