import "./empleado.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Divmode = styled.div`
  background-color: ${(usuario) => usuario.theme.bgc};
  color: ${(usuario) => usuario.theme.text};
  button {
    background-color: ${(usuario) => usuario.theme.toggle};
    color: ${(usuario) => usuario.theme.text};
  }
  button:hover {
    background-color: ${(usuario) => usuario.theme.hover};
  }
  p {
    color: ${(usuario) => usuario.theme.text};
  }
`;

export function Empleado({ usuario }) {
  const { nombre, identificacion, descripcion, visible } = usuario;
  if (!visible) {
    return null;
  }

  return (
    <>
      <Link
        to={`/mostrarusuario/${usuario.idusuario}`}
        style={{ textDecoration: "none" }}
      >
        <Divmode className="persona">
          <div className="seccion1">
            <div>
              <img
                className="foto"
                src={require("../topbar/ol.jpg")}
                alt="personauno"
              />
            </div>

            <div className="info">
              <h2 className="nombre">{usuario.nombre}</h2>

              <p className="identificacion">{usuario.identificacion}</p>
            </div>
          </div>
          <hr className="linea" />
          <p className="texto">{usuario.perfil}</p>
        </Divmode>
      </Link>
    </>
  );
}
