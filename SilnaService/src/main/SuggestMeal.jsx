import React, { useState } from 'react';
import "./main.css"

function SuggestMeal() {
    const [nutrient, setNutrient] = useState('');
    const [recommendedFoods, setRecommendedFoods] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNutrientChange = (event) => {
        setNutrient(event.target.value);
    };

    const handleEnterSuggestionsClick = async () => {
        if (!nutrient || nutrient === 's') {
            alert("Please select a nutrient.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/api/enteredNutrients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nutrient })
            });

            if (response.ok) {
                const data = await response.json();
                setRecommendedFoods(formatFoodSuggestions(data.foodData.foods));
            } else {
                setRecommendedFoods('Failed to load food suggestions.');
            }
        } catch (error) {
            console.error("Error getting food suggestions: ", error);
            setRecommendedFoods('Error loading food suggestions, try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatFoodSuggestions = (foods) => {
        return foods.join(', ');
    };

    return (
        <div className="activity bottom">
            <h3>Food Ideas</h3>
            <select value={nutrient} onChange={handleNutrientChange}>
                <option value="s">Select Nutrient...</option>
                <option value="Carbohydrate">Carbohydrate</option>
                <option value="Fats">Fats</option>
                <option value="Fiber">Fiber</option>
                <option value="Protien">Protien</option>
                <option value="Mineral: Calcium">Mineral: Calcium</option>
                <option value="Mineral: Chloride">Mineral: Chloride</option>
                <option value="Mineral: Chromium">Mineral: Chromium</option>
                <option value="Mineral: Copper">Mineral: Copper</option>
                <option value="Mineral: Fluoride">Mineral: Fluoride</option>
                <option value="Mineral: Iodine">Mineral: Iodine</option>
                <option value="Mineral: Iron">Mineral: Iron</option>
                <option value="Mineral: Magnesium">Mineral: Magnesium</option>
                <option value="Mineral: Manganese">Mineral: Manganese</option>
                <option value="Mineral: Molybdenum">Mineral: Molybdenum</option>
                <option value="Mineral: Phosphorus">Mineral: Phosphorus</option>
                <option value="Mineral: Potassium">Mineral: Potassium</option>
                <option value="Mineral: Selenium">Mineral: Selenium</option>
                <option value="Mineral: Sodium">Mineral: Sodium</option>
                <option value="Mineral: Zinc">Mineral: Zinc</option>
                <option value="Vitamin: A">Vitamin: A</option>
                <option value="Vitamin: B6">Vitamin: B6</option>
                <option value="Vitamin: B12">Vitamin: B12</option>
                <option value="Vitamin: C">Vitamin: C</option>
                <option value="Vitamin: D">Vitamin: D</option>
                <option value="Vitamin: E">Vitamin: E</option>
                <option value="Vitamin: K">Vitamin: K</option>
                <option value="Vitamin: Riboflavin">Vitamin: Riboflavin</option>
                <option value="Vitamin: Folate">Vitamin: Folate</option>
                <option value="Vitamin: Niacin">Vitamin: Niacin</option>
                <option value="Vitamin: Choline">Vitamin: Choline</option>
                <option value="Vitamin: Pantothenic Acid">Vitamin: Pantothenic Acid</option>
                <option value="Vitamin: Biotin">Vitamin: Biotin</option>
                <option value="Vitamin: Carotenoids">Vitamin: Carotenoids</option>
            </select>
            <button className="enter" onClick={handleEnterSuggestionsClick} disabled={loading}>
                {loading ? 'Loading...' : 'Enter'}
            </button>
            <p>Recommendations:</p>
            <p>{recommendedFoods}</p>
        </div>
    );
}

export default SuggestMeal;