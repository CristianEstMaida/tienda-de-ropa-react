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
          <ul className="menu">
              
              <li><Link className="menu-link boton-categoria" to="/productos">Productos</Link></li>
              <li><Link className="menu-link boton-categoria" to="/productos/medias">Medias</Link></li>
              <li><Link className="menu-link boton-categoria" to="/productos/pantalones">Pantalones</Link></li>
              <li><Link className="menu-link boton-categoria" to="/productos/remeras">Remeras</Link></li>
              <li><Link className="menu-link boton-categoria" to="/productos/abrigos">Buzos</Link></li>
              <li><Link className="menu-link boton-categoria" to="/nosotros">Nosotros</Link></li>
              <li><Link className="menu-link boton-categoria" to="/contacto">Contacto</Link></li>
              <li><CartWidget /></li>
          </ul>
        </nav>
    </header>
    <AsideMenu />
    </>
  )
}

export default Navbar
