document.addEventListener("DOMContentLoaded", function() {
    const userEmail = sessionStorage.getItem("email");
    document.getElementById("userEmail").textContent = userEmail;

    const nameDisplay = document.getElementById("nameDisplay");
    const emailDisplay = document.getElementById("emailDisplay");
    const passwordDisplay= document.getElementById("passwordDisplay");
    const nameEdit = document.getElementById("nameEdit");
    const emailEdit = document.getElementById("emailEdit");
    const passEdit = document.getElementById("passEdit");
    const editBtn = document.getElementById("editBtn");
    const saveBtn = document.getElementById("saveBtn");
    const passText = "*************";

    editBtn.addEventListener("click", function() {
        nameDisplay.style.display = "none";
        emailDisplay.style.display = "none";
        passwordDisplay.style.display = "none";
        editBtn.style.display = "none";

        nameEdit.style.display = "block";
        emailEdit.style.display = "block";
        passEdit.style.display = "block";
        saveBtn.style.display = "block";

        nameEdit.value = nameDisplay.textContent;
        emailEdit.value = emailDisplay.textContent;
        passEdit.value = passwordDisplay.textContent;
    });

    saveBtn.addEventListener("click", function() {
        nameDisplay.textContent = nameEdit.value;
        emailDisplay.textContent = emailEdit.value;
        passwordDisplay.textContent = passText;

        nameEdit.style.display = "none";
        emailEdit.style.display = "none";
        passEdit.style.display = "none";
        saveBtn.style.display = "none";

        nameDisplay.style.display = "block";
        emailDisplay.style.display = "block";
        passwordDisplay.style.display = "block";
        editBtn.style.display = "block";

    });
});
