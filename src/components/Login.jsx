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
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            
            navigate('/admin/pedidos');

        } catch (error) {
            console.error(error);
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
                
                {error && <p style={{ color: 'var(--clr-error)', marginTop: '0.5rem' }}>{error}</p>}

                <button className="enviar" type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
