import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipDetail from "./components/StarshipDetail/StarshipDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
