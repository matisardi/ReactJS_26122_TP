import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";
// import styles from "./Nav.module.css";

export const Nav = () => {
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-list">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categoría
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/category/pc"}>PC</Link></li>
                <li><Link className="dropdown-item" to={"/category/nuc"}>NUC</Link></li>
                <li><Link className="dropdown-item" to={"/category/notebook"}>Notebook</Link></li>
                <li><Link className="dropdown-item" to={"/category/server"}>Server</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/carrito"}>
                Carrito
                {totalItems > 0 && <span className="incart">{totalItems}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};