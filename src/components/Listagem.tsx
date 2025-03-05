// src/componentes/ListagemUsuarios.tsx

import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "../styles/Listagem.scss";

const Listagem = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsuarios(data.results))
      .catch((error) => console.error("Erro ao carregar usuários:", error));
  }, []);

  return (
    <div className="listagem-usuarios">
      <h2>Usuários retornados da API randomuser.me</h2>
      <div className="usuarios">
        {usuarios.map((usuario, index) => (
          <UserCard key={index} user={usuario} />
        ))}
      </div>
    </div>
  );
};

export default Listagem;
