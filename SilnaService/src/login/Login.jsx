import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"

function Login() {
    const navigate = useNavigate();


    async function login() {

        const email = document.getElementById("userID").value;
        const password = document.getElementById("password").value;

        const response = await fetch("/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({email, password})
        });
        const data = await response.json();

        if (data.message === 'Success logging in!') {
            sessionStorage.setItem("email", email);
            navigate("./main/Main");;
        } else {
            console.error('Login Failed:', data.message);
            alert('Login Failed: ' + data.message);
        }
    }

    function createAcnt() {
        window.location.href = "signup.html";
    }
    
    return (
        <div className="main_flex">
        <div className="flex nav">
        </div>

        <div className="flex title">
            <h3>Silna</h3>
        </div>

        <div className="flex activity">
            <div className="activity right">
                <div className="input email">
                    <input type="email" id="userID" placeholder="Email" />
                </div>
                <div className="input pass">
                    <input type="password" id="password" placeholder="Password" />
                </div>
                <button className="btn submit" onClick={login}>Log in</button>
                <button className="btn create_acnt" onClick={createAcnt}>Create Account</button> 
            </div>
            
            <div className="activity left">
                <img src="food.jpeg" alt="Login Page" />
            </div>
        </div>

        <div className="flex footer">
            <a href="https://github.com/katie10o/startup.git">My Github Repo</a>
        </div>
    </div>
);
}

export default Login