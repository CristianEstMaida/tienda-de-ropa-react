import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Limpiar errores previos

        try {
            // Intenta iniciar sesión con email y contraseña
            await signInWithEmailAndPassword(auth, email, password);
            
            // Opcional: Podrías añadir aquí lógica para asegurar que solo un "admin"
            // pueda acceder (ej. usando Custom Claims de Firebase Auth, 
            // pero requiere configuración en el Backend Admin SDK).

            // Si el login es exitoso, navega al inicio o al panel de administración.
            navigate('/'); 

        } catch (error) {
            console.error(error);
            // Muestra un mensaje de error amigable al usuario
            setError('Error de inicio de sesión. Verifica tus credenciales.');
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
                
                {/* Muestra el error si existe, usando estilos de error definidos en main.css */}
                {error && <p style={{ color: 'var(--clr-error)', marginTop: '0.5rem' }}>{error}</p>}

                <button className="enviar" type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
