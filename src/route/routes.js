import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ListaCompra, Address, Resume, Pokemon } from "../view";

const getRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListaCompra />} />
            <Route path="/address" element={<Address />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
    </BrowserRouter>
)

export default getRoutes 