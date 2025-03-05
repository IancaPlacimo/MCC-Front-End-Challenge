// src/componentes/Header.tsx

import { Link } from "react-router-dom";
import logo from "../assets/images/logo-branco.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="Header">
        <img  className="Header__logo" src={logo} alt="" />
      <nav  className="Header__list">
        <Link to="/listagem">Listagem</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
