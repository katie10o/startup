import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import foodImage from './food.jpeg';

function Login() {
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        const email = document.getElementById("userID").value;
        const password = document.getElementById("password").value;

        const response = await fetch("http://localhost:4000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({email, password})
        });
        const data = await response.json();

        if (data.message === 'Success logging in!') {
            sessionStorage.setItem("email", email);
            navigate("/main");
        } else {
            console.error('Login Failed:', data.message);
            alert('Login Failed: ' + data.message);
        }
    }

    function createAcnt() {
        navigate("/signup");
    }
    
    return (
        <div className="main_flex">
            <div className="flex title">
                <h3>Silna</h3>
            </div>

            <div className="content">
                <div className="form-container">
                    <form onSubmit={login}>
                        <input type="email" id="userID" placeholder="Email" />
                        <input type="password" id="password" placeholder="Password" />
                        <button type="submit" className="btn submit">Log in</button>
                        <button type="button" className="btn create_acnt" onClick={createAcnt}>Create Account</button> 
                    </form>
                </div>
                
                <div className="image-container">
                    <img src={foodImage} alt="Login Page" />
                </div>
            </div>

            <div className="flex footer">
                <a href="https://github.com/katie10o/startup.git" rel="noopener noreferrer" target="_blank">My Github Repo</a>
            </div>
        </div>
);
}

export default Login;