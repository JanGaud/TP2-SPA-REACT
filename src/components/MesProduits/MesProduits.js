import React, { useState } from "react";
import Form from "../Form/Form";
import Produit from "../Produit/Produit";
import './MesProduits.css'

function MesProduits() {
  const [produits, setProduits] = useState([]);

  const [input, setInput] = useState({
    titre: "",
    description: "",
    prix: "",
    categorie: "",
  });

  const addProduits = (produit) => {
    if (!produit.titre || /^\s*$/.test(produit.titre)) {
      return;
    }

    const newProduits = [produit, ...produits];

    setProduits(newProduits);
  };

  const completeProduit = (id) => {
    let updateProduits = produits.map((produit) => {
      if (produit.id === id) {
        return {
          ...produit,
          isComplete: !produit.isComplete,
        };
      }
      return produit;
    });
    setProduits(updateProduits);
  };

  const updateProduit = (produitId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setProduits((prev) =>
      prev.map((item) => (item.id === produitId ? newValue : item))
    );
  };

  const removeProduit = (id) => {
    const removeArr = [...produits].filter((produit) => produit.id !== id);
    setProduits(removeArr);
  };

  return (
    <div>
      <Form onSubmit={addProduits} />
      <div className="produits-container">
        <Produit
          produits={produits}
          removeProduit={removeProduit}
          updateProduit={updateProduit}
          completeProduit={completeProduit}
        />
      </div>
    </div>
  );
}

export default MesProduits;
