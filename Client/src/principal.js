import React, { useEffect, useState } from "react";
import "./App.css";

import { Empleado } from "./home/empleado";
import Temas from "./Theme/themes";
import { ThemeProvider } from "styled-components";
import { Topbar } from "./topbar/topbar";
import styled from "styled-components";

import axios from "axios";

import Exportar from "./sidebar/Sidebar";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Divmode = styled.div`
  min-width: 200px !important;

  min-height: 100vh;
  background-color: ${(props) => props.theme.bgc};
  color: ${(props) => props.theme.text};
  button {
    background-color: ${(props) => props.theme.toggle};
    color: ${(props) => props.theme.text};
  }
  button:hover {
    background-color: ${(props) => props.theme.hover};
  }
  p {
    color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h1``;

function Apps() {
  const [search, setSearch] = useState("");

  const [tecnologias, setTecnologias] = useState({
    "Amazon Web Services": false,
    Android: false,
    Angular: false,
    "C ++": false,
    CSS: false,
    DevOps: false,
    Eclipse: false,
    Fluter: false,
    Git: false,
    GlassFish: false,
    HTML: false,
    "IBM Db2": false,
    "IBM Integration Bus": false,
    "IntelliJ IDEA": false,
    Java: false,
    JavaScript: false,
    Jira: false,
    Kotlin: false,
    Laravel: false,
    MongoDB: false,
    "Microsoft SQL Server": false,
    ".NET CORE": false,
    "Node js": false,
    "Oracle Forms (Oracle)": false,
    "Oracle Reports (Oracle)": false,
    PHP: false,
    "PL-SQL (Oracle)": false,
    PostgreSQL: false,
    Postman: false,
    "Power BI": false,
    "Product Owner": false,
    Python: false,
    Ruby: false,
    "React js": false,
    "Scrum Developer": false,
    "Scrum Master": false,
    "Spring (JAVA)": false,
    Swift: false,
    Trello: false,
    Vue: false,
  });

  const [niveles, setNiveles] = useState({
    Junior: false,
    Medio: false,
    Senior: false,
    Master: false,
  });

  function handleTecnologiasChange(e) {
    const { name, checked } = e.target;
    setTecnologias({ ...tecnologias, [name]: checked });
  }

  function handleNivelesChange(e) {
    const { name, checked } = e.target;
    setNiveles({ ...niveles, [name]: checked });
  }

  function handleSearch(search) {
    setSearch(search);
  }

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const theme = isDarkMode ? Temas.claro : Temas.oscuro;

  const [datausuarios, setdatausuario] = useState([]);

  useEffect(() => {
    axios
      .get("api/usuario/obtenerusuarios")
      .then((res) => {
        console.log(res.data);
        setdatausuario(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [filtros, setFiltros] = useState({});

  useEffect(() => {
    axios
      .get("api/usuario/obtenerusuarios")
      .then((res) => {
        console.log(res.data);
        setdatausuario(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 

  function mostrarEmpleados() {
    const empleadosFiltrados = datausuarios.filter((usuario) => {
      const isVisible =
        usuario.nombre.toLowerCase().includes(search.toLowerCase()) ||
        usuario.identificacion.toLowerCase().includes(search.toLowerCase());
  
      const tecnologiasFilter = Object.keys(tecnologias).filter(
        (key) => tecnologias[key]
      );
  
      if (tecnologiasFilter.length > 0) {
        const userTecnologias = usuario.tecnologias?.map((tec) => tec.nombre);
  
        const found = tecnologiasFilter.every((tec) =>
          userTecnologias.includes(tec)
        );
        if (!found) {
          return false;
        }
      }
  
      const nivelesFilter = Object.keys(niveles).filter((key) => niveles[key]);
      if (nivelesFilter.length > 0) {
        const found = nivelesFilter.every((niv) => {
          const tecnologiasNivel = Object.entries(tecnologias).filter(
            ([tec, isSelected]) =>
              isSelected &&
              usuario.tecnologias.some(
                (t) => t.nombre === tec && t.nivel === niv
              )
          );
          return tecnologiasNivel.length > 0;
        });
        if (!found) {
          return false;
        }
      }
  
      return isVisible;
    });
  
    // Ordenar empleados
    const tecnologiasSeleccionadas = Object.entries(tecnologias)
      .filter(([_, isSelected]) => isSelected)
      .map(([tec]) => tec);
  
    const nivelesSeleccionados = Object.entries(niveles)
      .filter(([_, isSelected]) => isSelected)
      .map(([niv]) => niv);
  
    if (tecnologiasSeleccionadas.length > 0 && nivelesSeleccionados.length === 0) {
      // Ordenar por nivel de forma descendente: Master > Senior > Medio > Junior
      return empleadosFiltrados.sort((a, b) => {
        const nivelA = a.tecnologias?.find((tec) =>
          tecnologiasSeleccionadas.includes(tec.nombre)
        )?.nivel;
        const nivelB = b.tecnologias?.find((tec) =>
          tecnologiasSeleccionadas.includes(tec.nombre)
        )?.nivel;
  
        const nivelOrden = {
          Master: 0,
          Senior: 1,
          Medio: 2,
          Junior: 3,
        };
  
        return nivelOrden[nivelA] - nivelOrden[nivelB];
      });
    }
  
    // Ordenar empleados por nombre alfabéticamente
    return empleadosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
  
  

  const listausuarios = mostrarEmpleados()
    .filter((usuario) => usuario !== null)
    .map((usuario) => {
      return (
        <div key={usuario.id}>
          <Empleado usuario={usuario} />
        </div>
      );
    });

  return (
    <ModalContainer>
      <ThemeProvider theme={theme}>
        <Exportar
          tecnologias={tecnologias}
          handleTecnologiasChange={handleTecnologiasChange}
          niveles={niveles}
          handleNivelesChange={handleNivelesChange}
        />

        <div>
          <div className="mode-toggle">
            <Topbar
              isDarkMode={isDarkMode}
              onToggleTheme={toggleTheme}
              onSearch={handleSearch}
            />
          </div>

          <div className="cuadricula">{listausuarios}</div>
        </div>
      </ThemeProvider>
    </ModalContainer>
  );
}

export default Apps;
