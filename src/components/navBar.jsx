import "./navBar.css";
import { Link } from "react-router-dom";
import store from "../context/storeContext";
import { useContext } from "react";

const NavBar = () => {
  const cart = useContext(store).cart; // read cart from context

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Star Stickers
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form class="d-flex">Cart: {cart.length}</form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
