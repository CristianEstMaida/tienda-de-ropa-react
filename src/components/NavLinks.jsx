import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useAuth } from '../context/AuthContext';

const NavLinks = ({ closeMenu }) => { 
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  const handleLogout = async () => {
    await logout(); 
    navigate('/'); 
    handleClick();
  };

  return (
    <ul className="menu">
      <li><Link className="menu-link boton-categoria" to="/productos" onClick={handleClick}>Productos</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/calzadosfemeninos" onClick={handleClick}>Calzados femeninos</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/calzados" onClick={handleClick}>Calzados</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/pantalones" onClick={handleClick}>Pantalones</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/remeras" onClick={handleClick}>Remeras</Link></li>
      <li><Link className="menu-link boton-categoria" to="/productos/abrigos" onClick={handleClick}>Abrigos</Link></li>
      <li><Link className="menu-link boton-categoria" to="/nosotros" onClick={handleClick}>Nosotros</Link></li>
      <li><Link className="menu-link boton-categoria" to="/contacto" onClick={handleClick}>Contacto</Link></li>
      {user ? (
        <li>
          <button 
            className="menu-link" 
            onClick={handleLogout}
            // Asegura que se vea como un enlace usando estilos en línea para sobreescribir el CSS base
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--clr-link)' }} 
          >
            Cerrar Sesión (Admin)
          </button>
        </li>
      ) : (
        // Si no está logueado, mostrar el enlace para iniciar sesión
        <li>
          <Link className="menu-link" to="/admin" onClick={handleClick}>Admin Login</Link>
        </li>
      )}
      <li><CartWidget /></li>
    </ul>
  );
};

export default NavLinks;
