import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './settings.css'; // Assuming this is the path to your CSS file

// Include external stylesheets or scripts in your public/index.html file in React

function Settings() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailDisplay, setEmailDisplay] = useState('');

    useEffect(() => {
        async function fetchUserInfo() {
            const email = sessionStorage.getItem("email");
            setUserEmail(email);
            const url = `http://localhost:4000/api/settings?email=${encodeURIComponent(email)}`;

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/JSON'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setFirstName(data.userInfo.firstName);
                    setLastName(data.userInfo.lastName);
                    setEmailDisplay(email);
                } else {
                    console.error('Failed to retrieve user info');
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }

        fetchUserInfo();
    }, []);

    const handleLogout = async () => {
        localStorage.removeItem('email');
        await fetch(`http://localhost:4000/api/logout`, { method: 'delete' });
        navigate('/');
    };

    return (
        <div className="main_flex">
            <div className="flex nav">
                <h4 className="user">Welcome <span>{userEmail}</span></h4>
                <div className="nav_links">
                    <Link to="/main">Main</Link>
                </div>
            </div>
            <div className="flex activity">
                <div className="edit">
                    <h4>Your profile</h4>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{emailDisplay}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;