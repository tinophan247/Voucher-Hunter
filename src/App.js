import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaiXiu from "./pages/Game/TaiXiu/TaiXiu";
import KeoBuaBao from "./pages/Game/KeoBuaBao/KeoBuaBao";
import BauCua from "./pages/Game/BauCua/BauCua";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/TaiXiu" element={<TaiXiu />} />
      <Route path="/KeoBuaBao" element={<KeoBuaBao />} />
      <Route path="/BauCua" element={<BauCua />} />
    </Routes>
  );
}

export default App;
