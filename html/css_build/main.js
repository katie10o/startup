document.addEventListener("DOMContentLoaded", function() {
    const userEmail = sessionStorage.getItem("email");
    document.getElementById("userEmail").textContent = userEmail;
});