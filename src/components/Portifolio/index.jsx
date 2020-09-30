import React from "react";
import videoWebchat from "../../webchat.mp4";
import videoResizable from "../../resizable.mp4";
import imageApontador from '../../apontador.png';
import imageResizable from "../../tree.png";
import nodeImg from '../../Node.png';
import Python from '../../Python.png';
import Mysql from '../../Mysql.svg';
import Mongodb from '../../Mongodb.png';
import Js from '../../Js.webp';
import react from '../../react.png';
import Jest from '../../Jest.png';

import "./style.css";

const Portifolio = () => {
  return (
    <div className="portifolio">
      <br />
      <br />
      <h1>Portifólio</h1>
      <div className="after" />
      <br />
      <div className="backend">
        <h2>Backend</h2>
        <div className="after" />
        <div className="content">
          <div className="logos">
            <img className="logo" src={nodeImg} />
            <img className="logo" src={Python} />
            <img className="logo" src={Mysql} />
            <img className="logo" src={Mongodb} />
            <img className="logo" src={Jest} />
          </div>
          <h3>Blogs API</h3>
          <p><strong>Api REST CRUD</strong> com <strong>ORM sequelize</strong> arquitetura <strong>SOLID</strong> e autenticação <strong>JWT</strong>.</p>
          <p>Endpoint testados <strong>Jest</strong>.</p>
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
          <div className="between" />
          <h3>Tech news</h3>
          <p><strong>Web scrappy</strong> do site techmundo implementado em <strong>Python</strong>.</p>
          <p>Arquivamento em <strong>Csv</strong> e <strong>Json</strong>.</p>
          <p>Testes em <strong>pytest</strong></p>
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
          <div className="between" />
          <h3>Cookmaster</h3>
          <p><strong>API CRUD</strong> com arquitetura <strong>MSC</strong>.</p>
          <p>BD <strong>mongodb</strong>.</p>
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
          <div className="between" />
          <h3>Query unit</h3>
          <p>Modelagem de banco de dados <strong>Sql</strong> com relacionamentos <strong>One to Many</strong> e <strong>Many to Many</strong>.</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-block23-project-queries-unite/tree/andrey-queries-unite"
            >
              https://github.com/tryber/sd-02-block23-project-queries-unite/tree/andrey-queries-unite
            </a>
          </span>
          <div className="between" />
          <h3>Mongo Aggregations</h3>
          <p>Exercicios de <strong>mongo aggregations</strong> com consultas de bancos cruzados e <strong>groupby</strong>.</p>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-block22-mysql-vocabulary-booster/tree/andrey-vocabulary-booster"
            >
              https://github.com/tryber/sd-02-block22-mysql-vocabulary-booster/tree/andrey-vocabulary-booster
            </a>
          </span>
          <div className="between" />
          <h3>Trybeer</h3>
          <p>Aplicativo <strong>FullStack</strong> com diversas telas 3 entidades (User, Product, Sale), servidor <strong>node</strong> e <strong>Sql</strong>.</p>
          <strong>Entidades, validações e Api documentados.</strong>
          <p><strong>Front</strong> e <strong>Back</strong> testados em <strong>Jest</strong>.</p>
          <br />
          <span>
            <strong>Figma:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/file/dRYG01MdRnxQr6nlp1wT2o/Trybeer-v2?node-id=0%3A1"
            >
              https://www.figma.com/file/dRYG01MdRnxQr6nlp1wT2o/Trybeer-v2?node-id=0%3A1
            </a>
          </span>
          <span>
            <strong>Documentação:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-project-trybeer-v2-1/tree/master/back-end"
            >
              https://github.com/tryber/sd-02-project-trybeer-v2-1/tree/master/back-end
            </a>
          </span>
          <span>
            <strong>Repositório:</strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tryber/sd-02-project-trybeer-v2-1"
            >
              https://github.com/tryber/sd-02-project-trybeer-v2-1
            </a>
          </span>
        </div>
      </div>
      <br />
      <div className="frontend">
        <h2>Frontend</h2>
        <div className="after" />
        <div className="content">
          <div className="logos">
            <img className="logo" src={Js} />
            <img className="logo" src={react} />
          </div>
          <h3>Selectable, resizable and movable</h3>
          <p><strong>Lib</strong> em Js que permite ao componente. Os 3 comportamentos.</p>
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

          <div className="between" />

          <h3>Web Chat</h3>
          <p>Chat com <strong>sockets</strong>.</p>
          <p>DB: <strong>mongodb</strong></p>
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
          <div className="between" />
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
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
