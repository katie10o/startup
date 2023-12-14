import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Main from './main/Main'; // Your main page component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} /> 
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default App;