import { useNavigate } from 'react-router-dom';
import React from 'react';
import "./main.css"

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('email');
        fetch(`http://localhost:4000/api/logout`, { method: 'delete' })
            .then(() => {
                // Use react-router's navigate function for client-side redirection
                navigate('/');
            })
            .catch(error => {
                console.error('Logout failed:', error);
            });
    };

    return (
        <footer className="logout">
            <button id="logout" onClick={handleLogout}>Log Out</button>
        </footer>
    );
}

export default Logout;