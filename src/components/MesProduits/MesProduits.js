import React, {useState} from 'react'
import Form from '../Form/Form'

function MesProduits() {
  const [produits, setProduits] = useState([]);

  const addProduits = produit => {
    if(!produit.text || /^\s*$/.test(produit.text)) {
      return
    }

    const newProduits = [produit, ...produits]

    setProduits(newProduits);
    console.log(...produits);
  };

  return (
    <div>
      <h1>Test</h1>
      <Form onSubmit={addProduits}/>
      <p></p>
      <small></small>
      <small></small>
    </div>
  )
}

export default MesProduits

