

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("loginButton").addEventListener("click", login);

  document.getElementById("createBtn").addEventListener("click", createAcnt);


});
 
function login() {
    const email = document.getElementById("userID").value;
    sessionStorage.setItem("email", email)
    window.location.href = "silna_main.html"
  }

function createAcnt(){
  window.location.href = "sigup.html"
}