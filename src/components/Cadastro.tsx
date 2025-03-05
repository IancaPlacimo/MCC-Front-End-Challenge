// src/pages/Cadastro.tsx
import { useState } from "react";
import "../styles/Cadastro.scss";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const Cadastro = () => {
  const storedUsers = localStorage.getItem("users");
  const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [newUser, setNewUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setNewUser({ firstName: "", lastName: "", email: "" });
  };

  return (
    <div className="Cadastro">
      <form className="Cadastro__Card" onSubmit={handleSubmit}>
        <p className="Cadastro__Card__title">Cadastrar </p>
        <p className="Cadastro__Card__SubTitle">Por favor, insira os para cadastrar um novo usuario</p>
        <input className="Cadastro__Card__wrap-input"
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={handleChange}
          placeholder="Primeiro Nome"
          required
        />
        <input className="Cadastro__Card__wrap-input"
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleChange}
          placeholder="Último Nome"
          required
        />
        <input className="Cadastro__Card__wrap-input"
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
        <button className="Cadastro__Card__form-btn" type="submit">Cadastrar</button>
      </form>

      <div className="Cadastro__list-users">
        <p className="Cadastro__list-users__title">Usuários Cadastrados</p>
        <table className="Cadastro__list-users__tabela-usuarios">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Cadastro;
