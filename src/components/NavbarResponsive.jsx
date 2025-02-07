import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavbarResponsive = () => {
  useEffect(() => {
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const openMenu = document.querySelector("#open-menu");
    const closeMenu = document.querySelector("#close-menu");
    const aside = document.querySelector("aside");

    openMenu.addEventListener("click", () => {
        aside.classList.add("aside-visible");
    });

    closeMenu.addEventListener("click", () => {
        aside.classList.remove("aside-visible");
    });

    botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
        aside.classList.remove("aside-visible");
    }));

    return () => { 
      openMenu.removeEventListener('click', () => {
        aside.classList.add('aside-visible');
      });

      closeMenu.removeEventListener('click', () => {
        aside.classList.remove('aside-visible');
      });

      botonesCategorias.forEach(boton =>
        boton.removeEventListener('click', () => {
          aside.classList.remove('aside-visible');
      }));
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
