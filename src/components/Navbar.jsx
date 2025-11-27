import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import NavbarResponsive from './NavbarResponsive'
import AsideMenu from './AsideMenu'

const Navbar = () => {
  return (   
    <>
    <NavbarResponsive />
      
    <header className="navbar">
         <Link to="/" className="logo"><h1>Tienda de ropa</h1></Link>
        
        <nav>
          <NavLinks />
        </nav>
    </header>
    <AsideMenu />
    </>
  )
}

export default Navbar
