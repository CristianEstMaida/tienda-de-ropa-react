import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (   
    <>

    <header className="navbar">
         <Link 
           to="/" 
           className="logo"
           onClick={closeMenu} 
         >
             <h1>Tienda de ropa</h1>
         </Link>

        <button 
            className="open-menu" 
            onClick={toggleMenu}
            aria-expanded={menuOpen} 
        >
          <i className="bi bi-list"></i> 
        </button>

        <nav className={`menu-container ${menuOpen ? 'menu-open' : ''}`}>
          <NavLinks closeMenu={closeMenu} /> 
        </nav>
    </header>
    </>
  )
}

export default Navbar

export default Navbar
