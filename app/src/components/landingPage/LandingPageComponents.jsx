import React from 'react'
import LandingPage from '../../page/LandingPage'
import { FooterComponents } from '../footer/FooterComponents'
import { Navbar } from '../Navbar/Navbar'


export const LandingPageComponents = () => {
  return (
      <div>
          <Navbar />
          <LandingPage />
          <FooterComponents />
    </div>
  )
}
