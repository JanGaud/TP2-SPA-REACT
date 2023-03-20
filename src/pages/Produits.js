import React from 'react';
import Nav from "../components/Nav/Nav";
import MesProduits from '../components/MesProduits/MesProduits';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/";

function Produits() {
  const handleSubmit = (data) => {
    // Handle form submission data
  }

  return (
    <>
      <Nav />
      <div>
        <MesProduits />
      </div>
    </>
  );
}

export default Produits;
