
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function(event) {
        event.preventDefault();
        submitLogin();
    })
});

function submitLogin(){
    const email = document.getElementById("email").value;
    sessionStorage.setItem("email", email)
    window.location.href = "silna_main.html"
}