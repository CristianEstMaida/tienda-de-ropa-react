import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const QUICK_EMAIL = 'admin@tienda.com';
    const QUICK_PASSWORD = '123456';
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            
            navigate('/admin/pedidos');

        } catch (error) {
            console.error(error);
            setError('Error de inicio de sesión. Verifica tus credenciales.');
        }
    };

    const handleQuickAccess = async () => {
        setError('');
        
        // 1. Autocompletar (cambia el estado de los campos)
        setEmail(QUICK_EMAIL);
        setPassword(QUICK_PASSWORD);
        
        // 2. Ejecutar la autenticación directamente
        try {
            await signInWithEmailAndPassword(auth, QUICK_EMAIL, QUICK_PASSWORD);
            
            // Redirige al panel de pedidos
            navigate('/admin/pedidos');
            
        } catch (error) {
            // Muestra un error si las credenciales hardcodeadas no están registradas en Firebase
            console.error(error);
            setError('Error de acceso rápido. Asegúrate de que el usuario de prueba esté creado en la Consola de Firebase.');
        }
    };

    return (
        <div className="container">
            <h1 className="main-title">Admin Login</h1>
            <form className="formulario" onSubmit={handleLogin}>
                <h2>Ingresar Credenciales</h2>
                
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                {error && <p style={{ color: 'var(--clr-error)', marginTop: '0.5rem' }}>{error}</p>}

                <button className="enviar" type="submit">Iniciar Sesión</button>
                <button 
                    className="enviar" 
                    type="button" // Importante: debe ser 'button' para no enviar el formulario
                    onClick={handleQuickAccess}
                    style={{ backgroundColor: 'var(--clr-main-dark)' }} 
                >
                    Acceso Rápido (Admin: {QUICK_EMAIL})
                </button>
            </form>
        </div>
    );
};

export default Login;
