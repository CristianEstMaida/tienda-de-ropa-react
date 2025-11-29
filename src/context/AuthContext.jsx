import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        // Suscribirse a los cambios en el estado de autenticación de Firebase
        // Esto se ejecuta al inicio y cada vez que el usuario inicia o cierra sesión.
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Limpiar la suscripción al desmontar el componente
        return () => unsubscribe();
    }, []);

    // El contexto proporciona el usuario autenticado y el estado de carga
    return (
        <AuthContext.Provider value={{ user, loading, logout }}> 
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
