import React from 'react';
import { useEffect } from 'react'; // Necesitas el useEffect aquí
import NavLinks from './NavLinks';

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
        <NavLinks />
      </nav>
    </aside>
  );
};

export default AsideMenu;
