import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../components/cart/Cart'
import { LandingPageComponents } from '../components/landingPage/LandingPageComponents'



export const RouteComponents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPageComponents />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}
