document.addEventListener("DOMContentLoaded", function() {
    displayUserEmail();
    initializeEventListeners();
    document.getElementById('deleteBtn').style.display = 'none';
});

function displayUserEmail() {
    const userEmail = sessionStorage.getItem("email");
    document.getElementById("userEmail").textContent = userEmail;
}

function initializeEventListeners() {
    const mealTypeSelect = document.getElementById("meal_type");
    const mealInput = document.getElementById("meal-input");
    const enterBtn = document.getElementById("enter-meal");
    const mealTypeRecord = document.getElementById("meal_records")
    const enterMealRecord = document.getElementById("enter-daily-meal")
    const enterSuggestionsBtn = document.getElementById("enter-suggestions");
    const nutrientTypeSelect = document.getElementById("nuts_type");


    mealTypeSelect.addEventListener("change", () => handleMealTypeChange(mealTypeSelect, mealInput));
    enterBtn.addEventListener("click", () => handleEnterButtonClick(mealTypeSelect, mealInput));
    enterMealRecord.addEventListener("click", () => handleEnterDailyMealClick(mealTypeRecord))
    enterSuggestionsBtn.addEventListener("click", () => handleEnterSuggestionsClick(nutrientTypeSelect));

}

function handleMealTypeChange(mealTypeSelect, mealInput) {
    if (mealTypeSelect.value !== "s") {
        mealInput.style.display = "block";
    } else {
        mealInput.style.display = "none";
    }
}

async function handleEnterButtonClick(mealTypeSelect, mealInput) {
    const enterBtn = document.getElementById("enter-meal");
    enterBtn.disabled = true;

    const enteredMeal = mealInput.value.trim();
    if (!enteredMeal) {
        enterBtn.disabled = false;
        return;
    }

    const items = enteredMeal.split(',').map(item => item.trim());
    await submitMealData(mealTypeSelect.value, items);
    enterBtn.disabled = false;
    mealInput.value = "";
}

async function submitMealData(mealType, items) {
    document.getElementById('nutritionalValue').textContent = 'Loading...';
    const userEmail = sessionStorage.getItem('email');
    
    try {

        const response = await fetch('/api/enterFood', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mealType, items, userEmail})
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);

            const message = data.responseMessage;
            console.log(message);

            const nutrientsDetails = data.nutrients;
            let nutrientText = '';
            nutrientText = formatNutrientDetails(nutrientsDetails);

            document.getElementById('mealAlreadyEntered').textContent = message;
            document.getElementById('nutritionalValue').innerHTML = nutrientText;
        }
    } catch (error) {
        console.error("Error entering food: ", error);
        document.getElementById('nutritionalValue').textContent = 'Error loading the nutritional value, try again.';
    }
}
async function handleEnterDailyMealClick(mealTypeRecord) {
    document.getElementById('selected_meal').textContent = 'Loading...';
    console.log("meal record button clicked");
    const deleteBtn = document.getElementById('deleteBtn');
    const userEmail = sessionStorage.getItem('email');
    const mealType = mealTypeRecord.value;


    deleteBtn.style.display = "block";
    deleteBtn.addEventListener("click", () => handleEnterDeleteClick(mealType));


    try{
        const response = await fetch('/api/mealTypeLog', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({mealType, userEmail})
        });

        if (response.ok){
            const data = await response.json();
            console.log(data);
            if (data.message == "No meals found"){
                document.getElementById('entries').innerHTML = "No meals found";
            } else{
                let entry = data.mealTypeLogs.Entry;
                document.getElementById('selected_meal').textContent = mealType;
                document.getElementById('entries').innerHTML = formatMealEntry(entry);
            }
        }

    } catch (error){
        console.error("Error getting meals: ", error);

    }

}

async function handleEnterDeleteClick(mealType) {
    const userEmail = sessionStorage.getItem('email')

    try{

        const response = await fetch('/api/deleteMealInput', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({userEmail, mealType})
        });

        if (response.ok){
            const data = await response.json();
            let message = data.message;
            console.log(message);
            document.getElementById('deleted').textContent = message;
        }

    }catch (error) {
        console.error("Error deleting meal: ", error)
    }

};


async function handleEnterSuggestionsClick(nutrientTypeSelect) {
    console.log("Enter Suggestions Clicked");
    const nutrient = nutrientTypeSelect.value;
    if (!nutrient) {
        alert("Please select a nutrient.");
        return;
    }

    document.getElementById('recommendedFoods').textContent = 'Loading...';
    try {
        const response = await fetch('/api/enteredNutrients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nutrient })
        });

        if (response.ok) {
            const data = await response.json();
            let foodData = data.foodData.foods;
            console.log(foodData);
            console.log(typeof foodData);

            document.getElementById('recommendedFoods').textContent = formatFoodSuggestions(foodData);
        } else {
            document.getElementById('recommendedFoods').textContent = 'Failed to load food suggestions.';
        }
    } catch (error) {
        console.error("Error getting food suggestions: ", error);
        document.getElementById('recommendedFoods').textContent = 'Error loading food suggestions, try again.'
    }
}
function formatMealEntry(entry){
    let formattedText = "";
    for (const item of entry){
        formattedText += item + "<br>";
    }
    return formattedText;

}

function formatFoodSuggestions(foodData) {
    if (!foodData) {
        return 'No suggestions available.';
    }
    // Join the food items into a string
    return foodData.join(', ');
}

function formatNutrientDetails(details) {
    let formattedText = '';

    for (const item of details){
        formattedText += ("<b>"+item.item + ":</b><br>")
        const nutrientdetails = JSON.parse(item.nutrients);
        for (let nutrient in nutrientdetails){
            if (nutrientdetails[nutrient] !== "object Object") {
                formattedText += (nutrient + ": " + nutrientdetails[nutrient] + "<br>");
            }
        }
    }
    return formattedText;
}
