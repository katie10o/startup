document.addEventListener("DOMContentLoaded", async function() {
    const userEmail = sessionStorage.getItem("email");
    document.getElementById("userEmail").textContent = userEmail;
    const logoutBtn = document.getElementById("logout");

    logoutBtn.addEventListener("click", () => handleLogoutBtn());


    const response = await fetch(`api/settings?email=${userEmail}`);

    if (response.ok){
        const data = await response.json();
        console.log(data);

        document.getElementById("firstName").textContent = data.userInfo.firstName;
        document.getElementById("lastName").textContent = data.userInfo.lastName;
        document.getElementById("emailDisplay").textContent = userEmail;



    } else {
        console.error('Failed to retrieve user info');
    }


});

async function handleLogoutBtn() {
    localStorage.removeItem('email');
    fetch(`/api/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = 'index.html'));
}
