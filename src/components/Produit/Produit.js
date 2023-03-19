import React, {useState} from 'react'
import Form from '../Form/Form'

function Produit() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

  return produits.map((produit, index) => (
    <div className={produit.isComplete ? 'produit-row complete' : 'todo-row'} key={index}>
        <div key={produit.id}>
            {produit.text}
        </div>
        <div className='icons'>

        </div>
    </div>
  ))
}

export default Produit
