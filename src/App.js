import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Produits from "./pages/Produits";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Produits" element={<Produits />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
