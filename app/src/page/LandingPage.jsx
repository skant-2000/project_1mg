import React from 'react'
import HealthChcekupCarousel from '../components/landingPage/HealthChcekupCarousel'
import SaleCarousel from '../components/landingPage/SaleCarousel'
import FeaturedBrandCarousel from '../components/landingPage/FeaturedBrandCarousel'
import Products from '../components/landingPage/Products'

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
