import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

export const LoginSignup = () => {
  const [action, setAction] = useState("Registrarse");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Iniciar sesión" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Nombre de usuario" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Contraseña" />
        </div>
      </div>

      {action === "Registrarse" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Olvidaste tu contraseña? <span>Presiona aquí</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Iniciar sesión" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Registrarse");
          }}
        >
          Registrarse
        </div>
        <div
          className={action === "Registrarse" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Iniciar sesión");
          }}
        >
          Iniciar sesión
        </div>
      </div>
    </div>
  );
};
