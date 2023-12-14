import React from "react";
import "./main.css";
import Header from "./Header"
import EnterMeal from "./EnterMeal";
import Logout from "./Logout";
import MealRecord from "./MealRecord";
import SuggestMeal from "./SuggestMeal";
import WebSocket from "./WebSocket";

function Main(){

    return(
        <div className="main_flex">
            <Header />
            <div className="content_container">
                <EnterMeal />
                <MealRecord />
                <SuggestMeal />
                <WebSocket />
            </div>
            <Logout />

        </div>
        

    );

}

export default Main;