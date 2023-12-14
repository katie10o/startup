import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./signup.css";

function Signup() {
    const navigate = useNavigate(); // Define navigate using useNavigate

    async function signup(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const firstName = document.getElementById("first_name").value;
        const lastName = document.getElementById("last_name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch("http://localhost:4000/api/createAcnt", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Correct the case
            },
            body: JSON.stringify({firstName, lastName, email, password})
        });
        const data = await response.json();

        if (data.message) {
            sessionStorage.setItem("email", email);
            navigate("/main"); // Navigate to '/main' on successful account creation
        } else {
            console.error('Signup Failed:', data.message);
            alert('Signup Failed: ' + data.message);
        } 
    }

    return (
        <div className="main_flex">
            <div className="flex nav">
                <h3>Sign up for Silna</h3>
            </div>

            <div className="flex activity">
                <h3>Enter the Following:</h3>
                <form id="signupForm" className="signup" onSubmit={signup}>
                    <input type="text" id="first_name" placeholder="First Name"/>
                    <input type="text" id="last_name" placeholder="Last Name"/>
                    <input type="email" id="email" placeholder="Email"/>
                    <input type="password" id="password" placeholder="Password"/>
                    <button type="submit" className="btn submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;