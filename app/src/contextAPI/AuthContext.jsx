import React, { createContext } from 'react'
import axios from "axios";
export const AuthContext =  createContext()
export const AuthContextProvider = ({children}) => {
  const [register, setRegister] = React.useState("")
  const [login, setLogin] = React.useState("")
  const [isRegiter, setIsRegister] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(true)
  const [signedUp, setSignedUp] = React.useState(false)
  const [signupOtp, setSignupOtp] = React.useState("")
  const [loginOtp, setLoginOtp] = React.useState("")
  const [open1, setOpen1] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true); 
  const handleOpen2 = () => {
    setOpen1(true)
    setIsRegister(false)
  }
 
  const handleClose1 = () => setOpen1(false);

  const handleRegister = () => { 
    if(register.length !== 10) {
      alert("Please enter a valid 10 digit mobile number")
      return
    }
    let data = { 
      "number": register, 
    }
   axios.post("http://localhost:8000/api/user/signup", data).then((res) => {
    console.log("res", res)
    setIsRegister(true)
    console.log(res.data.otp)
    alert("otp:  "+ res.data.otp)
   })
   .catch((err) => {
     alert(err.response.data.message)
   })
   }

   const handleVerifyOtp = () => { 
    let data = { 
      "number": register, 
      "otp": signupOtp
    }
    // console.log(JSON.stringify(data))
   axios.post("http://localhost:8000/api/user/signup/verify", data).then((res) => {
    console.log("res", res)
    alert("Otp verified successfully")
    setSignedUp(true)
    setSignupOtp("")
    setOpen1(false)
   })
   .catch((err) => {
     alert("Otp is not verified")
   })
   }

   const handleVerifyLoginOtp = () => { 
    let data = { 
      "number": login, 
      "otp": loginOtp
    }
    // console.log(JSON.stringify(data))
   axios.post("http://localhost:8000/api/user/login/verify", data).then((res) => {
    console.log("res", res)
    alert("Otp verified successfully")
    setIsLogin(true)
    setLoginOtp("")
    setAuth(true)
    setOpen(false)
   })
   .catch((err) => {
     alert("Otp is not verified")
   })
   }

   const handleLogin = () => { 
    if(login.length !== 10) {
      alert("Please enter a valid 10 digit mobile number")
      return
    }
    let data = { 
      "number": login, 
    }
   axios.post("http://localhost:8000/api/user/login", data).then((res) => {
    console.log("res", res)
    setIsLogin(false)
    console.log(res.data.otp)
    alert("otp:  "+ res.data.otp)
   })
   .catch((err) => {
     alert(err.response.data.message)
   })
   }

  return (
      <AuthContext.Provider value={{loginOtp,auth,handleLogin,setAuth, handleVerifyLoginOtp, setLoginOtp, register, setRegister, login, setLogin, isRegiter, setIsRegister, isLogin, setIsLogin, handleRegister, handleVerifyOtp, signupOtp, handleOpen2, setSignupOtp,handleOpen, handleClose, open,handleOpen1, handleClose1, open1}}>
          {children}
      </AuthContext.Provider>
  )
}
