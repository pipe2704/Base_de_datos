import React, { useState } from "react";
import "./LoginPage.css"
import Swal from "sweetalert2";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Verifica las credenciales ingresadas
    if (username === "Leandro Acevedo" && password === "contraseña123") {
      onLogin(); // Llama a la función de inicio de sesión
    } else if (username === "Maria Fernanda Toro" && password === "contraseña456") {
      onLogin(); // Llama a la función de inicio de sesión
    } else {
      Swal.fire({
        title: "Error",
        text: "Credenciales incorrectas",
        icon: "error",
      });
    }
  };

  return (
    <div className="container">
      <div>
      <h2 className="titulo">OL Software</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input type="text" placeholder="Nombre de usuario" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" style={{backgroundColor:"#000581"}}>Iniciar sesión</button>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
