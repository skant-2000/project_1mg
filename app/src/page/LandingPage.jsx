import React from 'react'
import HealthChcekupCarousel from '../component/landingPage/HealthChcekupCarousel'
import SaleCarousel from '../component/landingPage/SaleCarousel'
import FeaturedBrandCarousel from '../component/landingPage/FeaturedBrandCarousel'
import Products from '../component/landingPage/Products'

export default function LandingPage() {
  return (
    <>
        <SaleCarousel />
        <HealthChcekupCarousel />
        <FeaturedBrandCarousel />
        <Products />
    </>
  )
}
