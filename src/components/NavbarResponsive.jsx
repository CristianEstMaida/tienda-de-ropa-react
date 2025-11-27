import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavbarResponsive = () => {
  useEffect(() => {
    // Solo necesitamos la lógica para ABRIR el menú
    const openMenu = document.querySelector("#open-menu");
    const aside = document.querySelector("aside");
    
    // Define handler to be able to remove it later
    const openMenuHandler = () => {
        if (aside) aside.classList.add("aside-visible");
    };

    if (openMenu) openMenu.addEventListener("click", openMenuHandler);

    return () => { 
      if (openMenu) openMenu.removeEventListener('click', openMenuHandler);
    };

  },[]);
  
  return (    
    <header className="header-mobile">
        <Link to="/" className="logo"><h1>Tienda de ropa</h1></Link>
        <button className="open-menu" id="open-menu">
          <i className="bi bi-list"></i>
        </button>
    </header>
  )
}

export default NavbarResponsive
