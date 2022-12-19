import React from "react";

import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/Index";
import { Home } from "./pages/Home";



export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
}
