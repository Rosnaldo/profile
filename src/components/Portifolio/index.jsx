import React from "react";

import "./style.css";

const Portifolio = () => {
  return (
    <div className="portifolio">
      <h1>Portifólio</h1>
      <div className="after-portifolio" />
      <div className="backend">
        <h2>Backend</h2>
        <div className="after-backend" />
        <div className="content">
          <h3>Blogs API</h3>
          <p>Api REST CRUD com ORM sequelize arquitetura SOLID e autenticação JWT.</p>
          <p>Endpoint testados Jest.</p>
          <strong>Repositório:</strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tryber/sd-02-project-blogs-api/tree/andrey"
          >
            https://github.com/tryber/sd-02-project-blogs-api/tree/andrey
          </a>
          <br />
          <br />
          <h3>Tech news</h3>
          <p>Web scrappy do site techmundo implementado em Python.</p>
          <p>Arquivamento em Csv e Json.</p>
          <strong>Repositório:</strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tryber/sd-02-tech-news/tree/andrey"
          >
            https://github.com/tryber/sd-02-tech-news/tree/andrey
          </a>
          <br />
          <br />
          <h3>Cookmaster</h3>
          <p>API CRUD com arquitetura MSC.</p>
          <p>BD mongodb.</p>
          <strong>Repositório:</strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tryber/sd-02-project-cookmaster-v2/tree/andrey-cookmaster-v2"
          >
            https://github.com/tryber/sd-02-project-cookmaster-v2/tree/andrey-cookmaster-v2
          </a>
        </div>
      </div>
      <br />
      <div className="frontend">
        <h2>Frontend</h2>
        <div className="after-frontend" />
        <div className="content">
          <h3>Web Chat</h3>
          <p>Chat com sockets.</p>
          <p>DB: mongodb</p>
          <strong>Repositório:</strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tryber/sd-02-project-webchat/tree/andrey"
          >
            https://github.com/tryber/sd-02-project-webchat/tree/andrey
          </a>
        </div>
      </div>
      <br />
      <div className="algoritms">
        <h2>Algoritms</h2>
        <div className="after-algoritm" />
        <div className="content">
          <h3>Combine by Tree interrupting</h3>
          <p>Algoritmo de combinação de elementos com restrições configuraveis.</p>
          <p>A otimização se da pela interrupção de arvores.</p>
          <strong>Repositório:</strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Rosnaldo/combining-tree-interrupting"
          >
            https://github.com/Rosnaldo/combining-tree-interrupting
          </a>
          <br />
          <strong>Artigo:</strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@andreytsuzuki/combining-by-tree-interrupting-45a83d786b89"
          >
            https://medium.com/@andreytsuzuki/combining-by-tree-interrupting-45a83d786b89
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
