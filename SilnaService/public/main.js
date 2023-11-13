document.addEventListener("DOMContentLoaded", function() {
    displayUserEmail();
    initializeEventListeners();
});

function displayUserEmail() {
    const userEmail = sessionStorage.getItem("email");
    document.getElementById("userEmail").textContent = userEmail;
}

function initializeEventListeners() {
    const mealTypeSelect = document.getElementById("meal_type");
    const mealInput = document.getElementById("meal-input");
    const enterBtn = document.getElementById("enter-meal");
    const enterSuggestionsBtn = document.getElementById("enter-suggestions");
    const nutrientTypeSelect = document.getElementById("nuts_type");

    mealTypeSelect.addEventListener("change", () => handleMealTypeChange(mealTypeSelect, mealInput));
    enterBtn.addEventListener("click", () => handleEnterButtonClick(mealTypeSelect, mealInput));
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
    try {
        const response = await fetch('/api/enterFood', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mealType, items })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);

            const nutrients = data.nutrients;
            let nutrientText = '';
            nutrients.forEach(nutrient => {
                nutrientText += `${nutrient.item}:\n`;
                const nutrientDetails = JSON.parse(nutrient.nutrients);
                nutrientText += formatNutrientDetails(nutrientDetails);
                nutrientText += '\n';
            });

            document.getElementById('nutritionalValue').textContent = nutrientText;
        }
    } catch (error) {
        console.error("Error entering food: ", error);
        document.getElementById('nutritionalValue').textContent = 'Error loading the nutritional value, try again.'
    }
}
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

function formatFoodSuggestions(foodData) {
    if (!foodData) {
        return 'No suggestions available.';
    }


    // Join the food items into a string
    return foodData.join(', ');
}

function formatNutrientDetails(details) {
    let formattedText = '';
    for (const key in details) {
        if (typeof details[key] === 'object' && details[key] !== null) {
            formattedText += `${key}:\n`;
            for (const nestedKey in details[key]) {
                formattedText += `  ${nestedKey}: ${details[key][nestedKey]}\n`;
            }
        } else {
            formattedText += `${key}: ${details[key]}\n`;
        }
    }
    return formattedText;
}
