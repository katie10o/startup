document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        await submitAccountCreation();
    });
});

async function submitAccountCreation() {
    const userData = {
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch('/api/createAcnt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();
    console.log(data);

    if (data.message === 'Account created successfully!') {
        submitLogin();
    } else {
        console.error('Signup failed:', data.message);
    }
}

function submitLogin() {
    const email = document.getElementById("email").value;
    sessionStorage.setItem("email", email);
    window.location.href = "silna_main.html";
}