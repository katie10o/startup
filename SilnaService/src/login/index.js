
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("loginButton").addEventListener("click", login);

  document.getElementById("createBtn").addEventListener("click", createAcnt);

});
 
async function login() {
    const email = document.getElementById("userID").value;
    const password = document.getElementById("password").value;
  
  const response = await fetch('/api/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify({email, password})
  });
  const data = await response.json();

  if (data.message === 'Success logging in!') {
    sessionStorage.setItem("email", email);
    window.location.href = "silna_main.html";
  } else {
    console.error('Login Failed:', data.message);
    alert('Login Failed: ' + data.message);
  }
  }

function createAcnt(){
  window.location.href = "signup.html";
}