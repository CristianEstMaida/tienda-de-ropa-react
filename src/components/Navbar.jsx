import React from 'react'
import { Link } from 'react-router-dom'
import NavbarResponsive from './NavbarResponsive'
import AsideMenu from './AsideMenu'
import NavLinks from './NavLinks';

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
