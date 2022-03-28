import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-end m-3">
      <section>
        <Link
          className="me-3 size-nav-options text-decoration-none"
          to="//api-rick-and-morty/"
        >
          Inicio
        </Link>
        <Link
          className="me-3 size-nav-options text-decoration-none"
          to="/favoritos"
        >
          Favoritos
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
