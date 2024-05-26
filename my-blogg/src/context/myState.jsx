import React, { useState, useEffect } from 'react';
import MyContext from './myContext';

function MyState({ children }) {
    const initialMode = localStorage.getItem('mode') || 'light';
    const [mode, setMode] = useState(initialMode);

    useEffect(() => {
        document.body.style.backgroundColor = mode === 'dark' ? 'rgb(17, 24, 39)' : 'white';
        localStorage.setItem('mode', mode);
    }, [mode]);

    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <MyContext.Provider value={{ mode, toggleMode }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
