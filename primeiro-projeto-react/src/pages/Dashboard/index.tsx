import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";

//pagina de dashboard
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
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
