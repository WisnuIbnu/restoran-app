import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeaderMenus from '../components/headerMenus/HeaderMenus'
import Menu from '../components/menu/Menu'

const Menus = () => {
  return (
    <div>
      <Navbar />
      <HeaderMenus />
      <Menu />
      <Footer />
    </div>
  )
}

export default Menus
