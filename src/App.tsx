import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import Homepage from "./pages/homepage/homepage";
import { SingleCharacter } from "./pages/singleCharacter/singleCharacter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/:id" element={<SingleCharacter />} />
      </Route>
    </Routes>
  );
}

export default App;
