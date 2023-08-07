import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

const AppWrapper = () => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<App />} />
        </Routes>
    );
};

export default AppWrapper;
