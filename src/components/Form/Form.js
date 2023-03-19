import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [input, setInput] = useState({
    titre: "",
    description: "",
    prix: "",
    categorie: "",
  });

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
  
    setInput({
      titre: "",
      description: "",
      prix: "",
      categorie: "",
    });
  };

  return (
      <div className="container">
        <form className="form-produits" onSubmit={handleSubmit}>
          <div className="form-logo">
            <img src="./img/RVA-Logo-short.png" alt="" />
          </div>
          <label>
            <input
              type="text"
              name="titre"
              placeholder="Titre de l'objet"
              className="titre-produit"
              value={input.titre}
              onChange={handleChange}
            />
          </label>
          <label>
            <textarea
              name="description"
              placeholder="Entrez une description du vehicule..."
              value={input.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            <input
              type="number"
              name="prix"
              placeholder="Prix"
              className="titre-produit"
              value={input.prix}
              onChange={handleChange}
            />
          </label>
          <label className="form-categorie" htmlFor="cars">
            Catégorie de voiture:
            <select
              name="cars"
              id="cars"
              required
              value={input.categorie}
              onChange={handleChange}
            >
              <option value="">None</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <div className="btn-container">
            <button className="button-add" type="submit">
              Ajouter
            </button>
          </div>
        </form>
      </div>
  );
}

export default Form;
