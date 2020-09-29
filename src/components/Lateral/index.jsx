import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./style.css";

const Lateral = () => {
  return (
    <div className="lateral">
      <div className="img">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFXAsqjqMZjSw/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=8aK5hCbcM-zdbaN8lL0F0d5OOK1HDnpwgTMAXZAcnqk"
        />
      </div>
      <p>Andrey K. Tsuzuki</p>
      <div className="container">
        <a
          className="bola"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/andrey-tsuzuki/"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" />
        </a>
        <a
          className="bola"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Rosnaldo"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
        </a>
      </div>
    </div>
  );
};
// https://github.com/Rosnaldo
export default Lateral;
