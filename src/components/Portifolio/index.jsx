import React from "react";
import videoWebchat from "../../webchat.mp4";
import videoResizable from "../../resizable.mp4";
import imageApontador from '../../apontador.png';
import imageResizable from "../../tree.png";
import "./style.css";

const Portifolio = () => {
  return (
    <div className="portifolio">
      <h1>Portifólio</h1>
      <div className="after-portifolio" />
      <div className="backend">
        <h2>Backend</h2>
        <div className="after" />
        <div className="content">
          <h3>Blogs API</h3>
          <p>Api REST CRUD com ORM sequelize arquitetura SOLID e autenticação JWT.</p>
          <p>Endpoint testados Jest.</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-project-blogs-api/tree/andrey"
            >
              https://github.com/tryber/sd-02-project-blogs-api/tree/andrey
            </a>
          </span>
          <br />
          <br />
          <h3>Tech news</h3>
          <p>Web scrappy do site techmundo implementado em Python.</p>
          <p>Arquivamento em Csv e Json.</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-tech-news/tree/andrey"
            >
              https://github.com/tryber/sd-02-tech-news/tree/andrey
            </a>
          </span>
          <br />
          <br />
          <h3>Cookmaster</h3>
          <p>API CRUD com arquitetura MSC.</p>
          <p>BD mongodb.</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-project-cookmaster-v2/tree/andrey-cookmaster-v2"
            >
              https://github.com/tryber/sd-02-project-cookmaster-v2/tree/andrey-cookmaster-v2
            </a>
          </span>
        </div>
      </div>
      <br />
      <div className="frontend">
        <h2>Frontend</h2>
        <div className="after" />
        <div className="content">
          <h3>Selectable, resizable and movable</h3>
          <p>Lib em Js que permite ao componente. Os 3 comportamentos</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Rosnaldo/Resizable"
            >
              https://github.com/Rosnaldo/Resizable
            </a>
          </span>
          <video controls  width="400" height="270">
            <source src={videoResizable} type="video/mp4" />
          </video>

          <br />

          <h3>Web Chat</h3>
          <p>Chat com sockets.</p>
          <p>DB: mongodb</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-project-webchat/tree/andrey"
            >
              https://github.com/tryber/sd-02-project-webchat/tree/andrey
            </a>
          </span>
          <video controls  width="400" height="270">
            <source src={videoWebchat} type="video/mp4" />
          </video>
        </div>
      </div>
      <br />
      <div className="algoritms">
        <h2>Algoritms</h2>
        <div className="after" />
        <div className="content">
          <h3>Combine by Tree interrupting</h3>
          <p>Algoritmo de combinação de elementos com restrições configuraveis.</p>
          <p>A otimização se da pela interrupção de arvores.</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Rosnaldo/combining-tree-interrupting"
            >
              https://github.com/Rosnaldo/combining-tree-interrupting
            </a>
          </span>
          <br />
          <span>
            <strong>Artigo:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@andreytsuzuki/combining-by-tree-interrupting-45a83d786b89"
            >
              https://medium.com/@andreytsuzuki/combining-by-tree-interrupting-45a83d786b89
            </a>
          </span>
        </div>
      </div>
      <div className="artigos">
        <h2>Artigos</h2>
        <div className="after" />
        <div className="content">
          <h3>Apontador Js</h3>
          <p>Nesse artigo eu explico sobre o comportamente de objetos que apontam para a mesma instancia.</p>
          <img src={imageApontador}/>
          <span>
            <strong>Artigo:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@andreykenjitsuzuki/o-problema-do-apontador-js-e1d0ecd3e96"
            >
              https://medium.com/@andreykenjitsuzuki/o-problema-do-apontador-js-e1d0ecd3e96
            </a>
          </span>
          <br />
          <h3>Combing by Tree interrupting</h3>
          <p>A teoria do que seria a forma mais perfomática possível de combinar elementor.</p>
          <img src={imageResizable} />
          <span>
            <strong>Artigo:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@andreytsuzuki/combining-by-tree-interrupting-45a83d786b89"
            >
              https://medium.com/@andreytsuzuki/combining-by-tree-interrupting-45a83d786b89
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
