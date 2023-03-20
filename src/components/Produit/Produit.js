import React, { useState } from "react";
import Form from "../Form/Form";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./Produit.css";

const Produit = ({ produits, removeProduit, updateProduit }) => {
  const [edit, setEdit] = useState({ id: null, value: "" });

  if (!produits) {
    return null;
  }

  const submitUpdate = (value) => {
    updateProduit(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return produits.map((produit, index) => (
    <div
      className={
        produit.isComplete ? "produit-row complete produit-card" : "todo-row"
      }
      key={index}
    >
      <div key={produit.id} className="produit-header">
        <h2>{produit.titre}</h2>      
      </div>
        <div className="produit-description">
          <p>{produit.description}</p>
        </div>
        <div className="produit-info">
          <p>Prix: {produit.prix}</p>
          <p>Catégorie: {produit.categorie}</p>
        </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeProduit(produit.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: produit.id, value: produit.titre })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Produit;
