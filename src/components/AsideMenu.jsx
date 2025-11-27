import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useEffect } from 'react'; // Necesitas el useEffect aquí

const AsideMenu = () => {
  
  useEffect(() => {
    // Lógica para cerrar el menú lateral (como en tu antiguo NavbarResponsive.jsx)
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const closeMenu = document.querySelector("#close-menu");
    const aside = document.querySelector("aside");

    const closeMenuHandler = () => {
        if (aside) aside.classList.remove("aside-visible");
    };
    
    const botonCategoriaHandler = () => {
        if (aside) aside.classList.remove("aside-visible");
    };

    if (closeMenu) closeMenu.addEventListener("click", closeMenuHandler);
    botonesCategorias.forEach(boton => {
        if (boton) boton.addEventListener("click", botonCategoriaHandler);
    });

    return () => { 
      if (closeMenu) closeMenu.removeEventListener('click', closeMenuHandler);
      botonesCategorias.forEach(boton =>
        { if (boton) boton.removeEventListener('click', botonCategoriaHandler); }
      );
    };

  },[]);


  return (
    <aside>
      <button className="close-menu" id="close-menu">
        <i className="bi bi-x"></i>
      </button>
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
    </aside>
  );
};

export default AsideMenu;
