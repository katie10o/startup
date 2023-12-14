import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import "./main.css"

function Header() {
    const userEmail = sessionStorage.getItem("email"); // Retrieve user email from sessionStorage
    


    return (
        <div className="flex nav">
            <h4 className="user">Welcome <span id="userEmail">{userEmail}</span></h4>
            <div className="nav_links">
                {/* Use Link for internal navigation */}
                <Link to="/settings">Settings</Link> 
            </div>
        </div>
    );
}

export default Header;