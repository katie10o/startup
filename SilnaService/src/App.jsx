import React from "react";
import Login from "./login/Login"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Other imports...

function App() {
    return (
        <BrowserRouter>
            {/* Other components... */}
            <Routes>
                <Route path="/" element={<Login />} />
                {/* Other routes... */}
            </Routes>
            {/* Other components... */}
        </BrowserRouter>
    );
}


export default App;
