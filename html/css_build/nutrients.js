document.addEventListener("DOMContentLoaded", function() {
    const userEmail = sessionStorage.getItem("email");
    document.getElementById("userEmail").textContent = userEmail;

    const nutrientSpecificTypeSelector = document.getElementById("nuts_type");
    const tables = {
        'm': document.getElementById("mineral"),
        'v': document.getElementById("vitamin"),
        'p': document.getElementById("protien"),
        'f': document.querySelector("#fats"), 
        'c': document.getElementById("carb")
    }

    nutrientSpecificTypeSelector.addEventListener("change", function() {
        let selectedValue = this.value;

        for (let key in tables){
            tables[key].style.display = "none";
        }
        
        if (selectedValue === "f") {
            tables[selectedValue].style.display = "block"; 
            tables[selectedValue].querySelectorAll("table").forEach(table => {
                table.style.display = "block";
            });
        } else {
            tables[selectedValue].style.display = "block";
        }
    });
})