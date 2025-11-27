import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (   
    <>
    
    <header className="navbar">
         <Link 
           to="/" 
           className="logo" 
           onClick={() => setMenuOpen(false)} 
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

        
        <nav className={menuOpen ? "menu-container menu-open" : "menu-container"}>
          
          <NavLinks closeMenu={() => setMenuOpen(false)} />
        </nav>
    </header>
    </>
  )
}

export default Navbar
