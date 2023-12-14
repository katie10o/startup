import React from "react";
import Login from "./login/Login"
import Signup from "./signup/Signup";
import Main from "./main/Main";
import Settings from "./settings/Settings";


import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Other imports...

function App() {
    return (
        <BrowserRouter>
            {/* Other components... */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/main" element={<Main />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
            {/* Other components... */}
        </BrowserRouter>
    );
}


export default App;
