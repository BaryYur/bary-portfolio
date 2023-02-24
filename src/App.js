import React from "react";

import { Routes, Route } from "react-router-dom";

import StartingPage from "./pages/StartingPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/bary-portfolio" element={<StartingPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
