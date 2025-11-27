import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavLinks = ({ closeMenu }) => { 
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <ul className="menu">
      <li><Link className="menu-link boton-categoria" to="/productos" onClick={handleClick}>Productos</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/medias" onClick={handleClick}>Medias</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/pantalones" onClick={handleClick}>Pantalones</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/remeras" onClick={handleClick}>Remeras</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/abrigos" onClick={handleClick}>Buzos</Link></li>
      <li><Link className="menu-link boton-categoria" to="/nosotros" onClick={handleClick}>Nosotros</Link></li>
      <li><Link className="menu-link boton-categoria" to="/contacto" onClick={handleClick}>Contacto</Link></li>
      <li><CartWidget /></li>
    </ul>
  );
};

export default NavLinks;
