import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <img src="./img/RVA-Logo-main.png" alt=""/>
      </div>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/Produits">Ajouter des véhicules</Link>
      </div>
    </nav>
  );
}

export default Nav;
