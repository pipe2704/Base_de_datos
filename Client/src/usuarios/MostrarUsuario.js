import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MostrarUsuario.css";

import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  margin: 20px;
  padding: 0px;
  cursor: pointer;
  border: none;
  font-size: 35px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
const LogoutButton = styled.button`
  position: absolute;
  width: 178px;
  height: 43px;
  background: #6066ec;
  border-radius: 10px;
  top: 30%;
  left: 15%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2px;
  right: 0px;
  background-color: transparent;
  color: #ffffff; /* Cambiar el color a blanco */
  font-weight: bold; /* Aplicar negrita */
  cursor: pointer;
  border: none;
  font-size: 20px;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #13123b;
  border-radius: 10px;
  position: absolute;
  width: 212px;
  height: 80px;
  left: 83%;
  top: 110px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
`;

export default function MostrarUsuario() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleProfileClick() {
    setIsProfileOpen(true);
    setIsModalOpen(true);
  }

  function handleCloseProfileClick() {
    setIsProfileOpen(false);
    setIsModalOpen(false);
  }

  function handleLogoutClick() {
    handleCloseProfileClick();
    window.location.reload(); // Recargar la página
  }
  const categorias = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React js",
      "Angular",
      "Vue",
      "Fluter",
      "Swift",
    ],
    Backend: [
      "Eclipse",
      "Spring (JAVA)",
      "Java",
      "Python",
      "C ++",
      "Ruby",
      "PHP",
      "Node js",
      "MongoDB",
      "IBM Integration Bus",
      "GlassFish",
      "IntelliJ IDEA",
      ".NET CORE",
      "Kotlin",
      "Laravel",
    ],
    Mobile_y_otros: ["Amazon Web Services", "Android", "Postman", "Power BI"],
    Base_de_datos: [
      "PL-SQL (Oracle)",
      "MongoDB",
      "PostgreSQL",
      "Microsoft SQL Server",
      "Oracle Forms (Oracle)",
      "Oracle Reports (Oracle)",
      "IBM Db2",
    ],
    Proyectos: ["Trello", "Jira"],
    Versionamiento: ["Git"],
    Marcos_agiles: ["Scrum Product Owner","Scrum Master", "Scrum Developer","DevOps"],
  };

  const params = useParams();

  // Hooks
  const [nombre, setNombre] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [perfil, setPerfil] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");
  const [tel, setTel] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");


  const [descripcion, setDescripcion] = useState("");
  const [visible, setVisible] = useState(true);
  const [tecnologias, setTecnologias] = useState([{ nombre: "", nivel: "" }]);
  const [idusuario, setIdusuario] = useState("");

  // Para volver atrás al index
  const navegar = useNavigate();

  useEffect(() => {
    axios
      .post("/api/usuario/obtenerdatausuario", { idusuario: params.idusuario })
      .then((res) => {
        console.log(res.data[0]);
        const datausuario = res.data[0];
        if (datausuario) {
          setNombre(datausuario.nombre);
          setIdentificacion(datausuario.identificacion);
          setPerfil(datausuario.perfil);
          setCiudad(datausuario.ciudad);
          setCorreo(datausuario.correo);
          setTel(datausuario.tel);
          setFechaIngreso(datausuario.fechaIngreso);
          setFechaSalida(datausuario.fechaSalida);


          setDescripcion(datausuario.descripcion);
          setTecnologias(datausuario.tecnologias);
          setIdusuario(datausuario.idusuario);
        } else {
          console.log("No se encontró ningún usuario con el ID proporcionado");
        }
      });
  }, []);

  function borrarusuario(idusuario) {
    axios
      .post("/api/usuario/borrarusuario", { idusuario: idusuario })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function clasificarTecnologia(nombreTecnologia) {
    for (const categoria in categorias) {
      if (categorias[categoria].includes(nombreTecnologia)) {
        return categoria;
      }
    }
    return "test";
  }

  const tecnologiasArray = tecnologias.map((tecnologia, index) =>
    clasificarTecnologia(tecnologia.nombre)
  );

  // Crear las columnas dinámicamente en función de las tecnologías
  const columns = [
    { category: "Frontend", label: "Frontend" },
    { category: "Backend", label: "Backend" },
    { category: "Base_de_datos", label: "Base de datos" },
    { category: "Mobile_y_otros", label: "Mobile y otros" },
    { category: "Proyectos", label: "Proyectos" },
    { category: "Versionamiento", label: "Versionamiento" },
    { category: "Marcos_agiles", label: "Marcos ágiles" },
  ].filter((column) => tecnologiasArray.includes(column.category));

  function createData(name, ...categories) {
    const row = {
      name,
    };
    categories.forEach((category) => {
      row[category] = [];
    });
    return row;
  }

  const rows = {};

  tecnologiasArray.forEach((tecnologia, index) => {
    const nivel = tecnologias[index].nivel;
    const column = columns.find((column) => column.category === tecnologia);

    if (column) {
      if (!rows[nivel]) {
        rows[nivel] = { name: nivel };
        columns.forEach((col) => {
          rows[nivel][col.category] = [];
        });
      }

      rows[nivel][column.category].push(tecnologias[index].nombre);
    }
  });

  const rowsArray = Object.values(rows);
  rowsArray.sort((a, b) => {
    const nivelesOrden = ["Master", "Senior", "Medio", "Junior"];
    return nivelesOrden.indexOf(a.name) - nivelesOrden.indexOf(b.name);
  });
  return (
    <>
    <div className="container-fluid nav-container" style={{ backgroundColor: "#0B0560" }}>
    <div className="nav-links">
      <Link className="nav-link" to="/">
        <Button style={{ marginLeft: "50px"}}>
          <FaHome />
        </Button>
      </Link>
      <Link className="nav-link" to="/agregarusuario">
        <Button style={{ marginLeft: "30px"}}>
          <BsPersonFillAdd />
        </Button>
      </Link>
      <Button onClick={handleProfileClick} style={{ marginLeft: "1420px"}}>
        <CgProfile />
      </Button>
    </div>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
          <CloseButton onClick={handleCloseProfileClick}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
            <LogoutButton onClick={handleLogoutClick}>Cerrar sesión</LogoutButton>
          </ModalContent>
        </ModalContainer>
      )}
      </div>
      <div id="mi-div">
        <img
          src={require("../topbar/ol.jpg")}
          alt="Foto de empleado"
          id="logo-empresa"
        />
        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "220px",
            left: "38%",
            wordWrap:"break-word",
            maxWidth:"300px",
          }}
        >
          <strong>Nombre: </strong>
          {nombre}
        </p>
        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "260px",
            left: "38%",
          }}
        >
          <strong>Identificación: </strong>
          {identificacion}
        </p>

        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "260px",
            left: "56%",
          }}
        >
          <strong>Ciudad de residencia: </strong>
          {ciudad}
        </p>

        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "220px",
            left: "56%",
            wordWrap:"break-word",
            maxWidth:"350px",
          }}
        >
          <strong>Correo: </strong>
          {correo}
        </p>

        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "290px",
            left: "38%",
          }}
        >
          <strong>Telefono: </strong>
          {tel}
        </p>

        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "290px",
            left: "56%",
          }}
        >
          <strong>Fecha de ingreso: </strong>
          {fechaIngreso}
        </p>

        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "320px",
            left: "56%",
          }}
        >
          <strong>Fecha salida: </strong>
          {fechaSalida ? fechaSalida : "No Aplica"}
        </p>

        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "350px",
            left: "38%",
            maxWidth:"650px",
            whiteSpace:"normal",
            overflow:"visible",
            wordWrap:"break-word",
          }}
        >
          <strong>Descripción: </strong>
          {descripcion}
          
        </p>

        <p
          style={{
            fontSize: "18px",
            position: "absolute",
            top: "320px",
            left: "38%",
            maxWidth: "150px",
            order:"1",
          }}
        >
          <strong>Perfil Ol: </strong>
          {perfil}
        </p>
        <Link className="nav-link" to={`/editarusuario/${idusuario}`}>
          <Button style={{ position: "absolute", top: "150px", left: "1180px", backgroundColor: "white", color:"black", order:"2"}}>
            <FaEdit />
          </Button>
        </Link>

        <Button
          style={{
            position: "absolute",
            top: "150px",
            left: "1240px",
            color: "red",
            order:"3",
          }}
          onClick={() => {
            Swal.fire({
              title: "¿Desea eliminar el empleado?",
              text: "No puedes deshacer esta acción!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Si, borrar!",
            }).then((result) => {
              if (result.isConfirmed) {
                borrarusuario(idusuario);
                navegar("/");
                Swal.fire(
                  "Eliminado!",
                  "El empleado ha sido eliminado de la base de datos",
                  "success"
                );
              }
            });
          }}
        >
          <FaTrash />
        </Button>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {columns.map((column) => (
                  <TableCell align="center" key={column.category}>
                    <strong>{column.label}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsArray.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "80px" }}
                  >
                    {row.name}
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell align="center" key={column.category}>
                      {row[column.category].map((technology, index) => (
                        <div key={index} className="Celda">
                          {technology}
                        </div>
                      ))}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}