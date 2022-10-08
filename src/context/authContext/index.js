import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // currentUserserá igual a la identificación de usuario de la autenticación de Firebase y, si no se autentica ningún usuario, esta variable es nula.

    const [currentUser, setCurrentUser] = useState(null);
  
    const auth = getAuth();
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setCurrentUser(uid);
        } else {
          setCurrentUser(null);
        };
      });
    }, [auth]);
  
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  
  };