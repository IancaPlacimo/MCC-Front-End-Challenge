// src/componentes/Login.tsx

import { useState } from "react";
import "../styles/Login.scss";
import logo from "../assets/images/logo-branco.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Usuário logado:", { email, senha });
  };

  return (
    <div className="login">
      <form className="login__card" onSubmit={handleSubmit}>
      <img className="login__card__logo" src={logo} alt="" />
        <input className="login__card__wrap-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="login__card__wrap-input"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Link to="/" className="login__card__login-form-btn" type="submit">Entrar</Link>
      </form>
    </div>
  );
};

export default Login;
