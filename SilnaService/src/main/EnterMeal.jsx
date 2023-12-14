import React, { useState } from 'react';
import "./main.css"

function EnterMeal(){
    const [mealType, setMealType] = useState('s'); // Default value
    const [mealInput, setMealInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [nutrientDetails, setNutrientDetails] = useState('');

    const handleMealTypeChange = (event) => {
        setMealType(event.target.value);
    };

    const handleEnterButtonClick = async () => {
        if (!mealInput.trim()) {
            return;
        }
        const items = mealInput.split(',').map(item => item.trim());
        await submitMealData(mealType, items);
        setMealInput(''); // Clear input after submission
    };

    const submitMealData = async (mealType, items) => {
        setIsLoading(true);
        const userEmail = sessionStorage.getItem('email');
        try {
            const response = await fetch('http://localhost:4000/api/enterFood', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mealType, items, userEmail })
            });
            if (response.ok) {
                const data = await response.json();
                setResponseMessage(data.responseMessage);
                setNutrientDetails(formatNutrientDetails(data.nutrients));
                // broadcastEvent(items.join(', ')); // Implement if needed
            }
        } catch (error) {
            console.error("Error entering food: ", error);
            setResponseMessage('Error loading the nutritional value, try again.');
        }
        setIsLoading(false);
    };

    const formatNutrientDetails = (details) => {
        // Your formatting logic here
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
        return formattedText; // Placeholder
        };


        return (
            <div className="activity top">
                <h3>Meal Input</h3>
                <select id="meal_type" name="meal" value={mealType} onChange={handleMealTypeChange}>
                    <option value="s">Select meal...</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snacks">Snacks</option>
                </select>
                {mealType !== 's' && (
                    <input 
                        type="text" 
                        id="meal-input" 
                        placeholder="Enter Meal" 
                        value={mealInput} 
                        onChange={(e) => setMealInput(e.target.value)} 
                    />
                )}
                <button className="enter" id="enter-meal" onClick={handleEnterButtonClick} disabled={isLoading}>
                    Enter
                </button> 
                <p>Nutritional Value of entered foods:</p>
                <p id="mealAlreadyEntered">{responseMessage}</p>
                <div id="nutritionalValue" dangerouslySetInnerHTML={{ __html: nutrientDetails }} />
            </div>
        );
}
export default EnterMeal;