import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import SwiperFood from '../components/swiper/SwiperFood'
import Footer from '../components/footer/Footer'
import Benefits from '../components/benefits/Benefits'
import NewFood from '../components/newFood/NewFood'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <SwiperFood />
      <Benefits />
      <NewFood />
      <Footer />
    </>
  )
}

export default Home
