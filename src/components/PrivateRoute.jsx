import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        // Muestra un mensaje mientras Firebase verifica si hay un usuario activo
        return <h2 className="main-title">Cargando autenticación...</h2>; 
    }

    // Si el usuario existe (está logueado), permite el acceso usando <Outlet />
    // De lo contrario, redirige al login de administrador (/admin)
    return user ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default PrivateRoute;
