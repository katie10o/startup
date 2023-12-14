import React, { useState } from 'react';
import "./main.css"

function MealRecord() {
    const [mealType, setMealType] = useState('s');
    const [entries, setEntries] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleMealTypeChange = (event) => {
        setMealType(event.target.value);
        setSelectedMeal(''); // Clear the selected meal when the meal type changes
        setEntries(''); // Clear existing entries
        setDeleteMessage(''); // Clear delete message
    };

    const handleEnterDailyMealClick = async () => {
        setLoading(true);
        setSelectedMeal(mealType); // Set the selected meal type
        const userEmail = sessionStorage.getItem('email');

        try {
            const response = await fetch('http://localhost:4000/api/mealTypeLog', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ mealType, userEmail })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.message === "No meals found") {
                    setEntries("No meals found");
                } else {
                    setEntries(formatMealEntry(data.mealTypeLogs.Entry));
                }
            }
        } catch (error) {
            console.error("Error getting meals: ", error);
            setEntries('Error loading meals');
        } finally {
            setLoading(false);
        }
    };

    const formatMealEntry = (entry) => {
        return entry.map((item, index) => <p key={index}>{item}</p>);
    };

    const handleEnterDeleteClick = async () => {
        setLoading(true);
        const userEmail = sessionStorage.getItem('email');

        try {
            const response = await fetch('http://localhost:4000/api/deleteMealInput', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ userEmail, mealType })
            });

            if (response.ok) {
                const data = await response.json();
                setDeleteMessage(data.message);
            }
        } catch (error) {
            console.error("Error deleting meal: ", error);
            setDeleteMessage('Error deleting meal');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="activity middle">
            <h3>Daily Meal Records</h3>
            <select value={mealType} onChange={handleMealTypeChange}>
                <option value="s">Select meal...</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snacks">Snacks</option>
            </select>
            <button className="enter" onClick={handleEnterDailyMealClick} disabled={loading}>Enter</button> 
            <p> Entered meals for: <span>{selectedMeal}</span></p>
            <div id="entries">{entries}</div>
            <button onClick={handleEnterDeleteClick} disabled={loading || mealType === 's'}>Delete</button>
            <p id="deleted">{deleteMessage}</p>
        </div>
    );
}

export default MealRecord;