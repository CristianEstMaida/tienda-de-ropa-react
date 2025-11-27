import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavLinks = ({ closeMenu }) => { 
  return (
    <ul className="menu">
      <li><Link className="menu-link boton-categoria" to="/productos" onClick={closeMenu}>Productos</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/medias" onClick={closeMenu}>Medias</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/pantalones" onClick={closeMenu}>Pantalones</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/remeras" onClick={closeMenu}>Remeras</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/abrigos" onClick={closeMenu}>Buzos</Link></li>
      <li><Link className="menu-link boton-categoria" to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
      <li><Link className="menu-link boton-categoria" to="/contacto" onClick={closeMenu}>Contacto</Link></li>
      <li><CartWidget /></li>
    </ul>
  );
};

export default NavLinks;
