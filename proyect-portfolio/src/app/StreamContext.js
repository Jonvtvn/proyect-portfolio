'use client'
// Crear un nuevo archivo llamado StreamContext.js
import React, { createContext, useContext, useState } from 'react';

const StreamContext = createContext();

export const StreamProvider = ({ children }) => {
    const [currentStream, setCurrentStream] = useState(null);

    const setStream = (stream) => {
        console.log('Setting stream:', stream);
        setCurrentStream(stream);
    };

    return (
        <StreamContext.Provider value={{ currentStream, setStream }}>
            {children}
        </StreamContext.Provider>
    );
};

export const useStream = () => {
    const context = useContext(StreamContext);
    if (!context) {
        throw new Error('useStream debe ser utilizado dentro de un StreamProvider');
    }
    return context;
};
