import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";
import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

//pagina de dashboard
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`); //buscando dados
    const repository = response.data; //pegando somente os dados das respostas

    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/39064364?s=460&u=c3194c358999291b375d3555065c5518ba10dde4&v=4"
            alt="Image"
          />
          <div>
            <strong>BootCamp primeiro projeto</strong>
            <p>Uma descrição qualquer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
