import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Welcome, {username} 🎉</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Welcome;