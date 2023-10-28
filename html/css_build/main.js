document.addEventListener("DOMContentLoaded", function() {
    const userEmail = sessionStorage.getItem("email");
    document.getElementById("userEmail").textContent = userEmail;

    const mealTypeSelect = document.getElementById("meal_type");
    const mealInput = document.getElementById("meal-input");
    const enterBtn = document.getElementById("enter");
    const nutrientTypeSelect = document.getElementById("nuts_type");
    const numParagraph = document.querySelector(".num");
    const selectedNutrientSpan = document.getElementById("selected_nutr");


    mealTypeSelect.addEventListener("change", function() {
        if (this.value!== "s"){
            mealInput.style.display = "block";
            if (this.value === "w"){
                mealInput.type = "number";
                mealInput.placeholder = "Enter oz";
            } else {
                mealInput.type = "text";
                mealInput.placeholder = "Enter Meal";
            }
        } else {
            mealInput.style.display = "none";
        }
    });

    enterBtn.addEventListener("click", function() {
        const selectedMeal = mealTypeSelect.value;
        const enteredMeal = mealInput.value.trim();

        if (enteredMeal) {
            switch (selectedMeal){
                case 'b':
                    updateTable("Breakfast", enteredMeal);
                    break;
                
                case 'l':
                    updateTable("Lunch", enteredMeal);
                    break;
                case 'd':
                    updateTable("Dinner", enteredMeal);
                    break;
                case 'sn':
                    updateTable("Snacks", enteredMeal);
                    break;
                case 'w':
                    updateTable("Water", enteredMeal);
                    break;
            } 
            mealInput.value=""; 
        }
    });
    nutrientTypeSelect.addEventListener("change", function() {
        let selectedValue = this.value;
        let nutrientName = "";
        
        switch (selectedValue) {
            case 'm':
                nutrientName = "mineral";
                numParagraph.textContent = "47%";
                break;
            case 'v':
                nutrientName = "vitamin";
                numParagraph.textContent = "55%";
                break;
            case 'p':
                nutrientName = "protein";
                numParagraph.textContent = "65%";
                break;
            case 'f':
                nutrientName = "fat";
                numParagraph.textContent = "35%";
                break;
            case 'c':
                nutrientName = "carb";
                numParagraph.textContent = "60%";
                break;
            default:
                numParagraph.style.display = "none";
                selectedNutrientSpan.parentNode.style.display = "none";
                return;
        }

        numParagraph.style.display = "block";
        selectedNutrientSpan.parentNode.style.display = "block";
        selectedNutrientSpan.textContent = nutrientName;
    });
});

function updateTable(category, meal){
    const rows = document.querySelectorAll(".activity table tr");

    rows.forEach((row) => {
        const mealCategoryCell = row.querySelector(".meal_category");
        if (mealCategoryCell && mealCategoryCell.textContent.trim() === category) {
            const itemsCell = row.querySelector(".items");
            if(category === "Water"){
                const currentoz = parseFloat(itemsCell.textContent.trim()) || 0;
                const addoz = parseFloat(meal) || 0;
                itemsCell.textContent = (currentoz + addoz).toString() + " oz";
            }
            if (!itemsCell.textContent.trim()) {
                itemsCell.textContent = meal;
            } else{
                itemsCell.textContent += ", " + meal;
            }
        }
    });
}