import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ListaCompra, Address, Resume } from "../view";

const getRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListaCompra />} />
            <Route path="/address" element={<Address />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    </BrowserRouter>
)

export default getRoutes 