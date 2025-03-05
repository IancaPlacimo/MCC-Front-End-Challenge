import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";
import logo from "../assets/images/logo-branco.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let hasError = false;
    const newErrors = { email: "", senha: "" };

    if (!email) {
      newErrors.email = "O email é obrigatório.";
      hasError = true;
    }
    if (!senha) {
      newErrors.senha = "A senha é obrigatória.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Usuário logado:", { email, senha });
      navigate("/listagem");
    }
  };

  return (
    <div className="login">
      <form className="login__card" onSubmit={handleSubmit}>
        <img className="login__card__logo" src={logo} alt="Logo" />

        <div className="login__card__wrap-input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="login__card__wrap-input">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {errors.senha && <span className="error-message">{errors.senha}</span>}
        </div>

        <button className="login__card__login-form-btn" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
