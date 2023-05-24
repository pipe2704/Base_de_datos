import React, { useState } from "react";
import uniquid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";
import "../login/estilosVarios.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  margin: 20px;
  padding: 0px;
  cursor: pointer;
  border: none;
  font-size: 40px;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.5);
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
function AgregarUsuario() {
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
  //Hooks
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
  const navegar = useNavigate();
  
  function agregarUsuario() {
    var usuario = {
      nombre: nombre,
      identificacion: identificacion,
      perfil: perfil,
      ciudad: ciudad,
      correo: correo,
      tel: tel,
      fechaIngreso: fechaIngreso,
      fechaSalida: fechaSalida,

      descripcion: descripcion,
      visible: visible,
      tecnologias: tecnologias,
      idusuario: uniquid(),
    };
    console.log(usuario);

    // Validate fields
    if (!nombre || !identificacion || !perfil || !ciudad || !correo || !tel || !fechaIngreso ) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos",
        icon: "error",
      });
      return;
    }
    //Validar nombre y ciudad
    if (!/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/.test(nombre) || !/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/.test(ciudad)) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingresa solo letras en los campos de nombre y ciudad",
        icon: "error",
      });
      return;
    }

    //Validar formato de identificación
    const identificacionRegex = /^[0-9]+$/;
    if (!identificacionRegex.test(identificacion)) {
      Swal.fire({
        title: "Error",
        text: "El campo Identificación solo puede contener números",
        icon: "error",
      });
      return;
    }
   //Validar tel
   if (!/^[0-9()+\s]+$/.test(tel)) {
    Swal.fire({
      title: "Error",
      text: "Por favor, ingresa solo números, el carácter '+' y paréntesis en el campo de teléfono",
      icon: "error",
    });
    return;
  }
  //Validar correo
  if (!correo.endsWith("@olsoftware.com")) {
    Swal.fire({
      title: "Error",
      text: "Por favor, ingresa un correo válido de OLSoftware",
      icon: "error",
    });
    return;
  }
  //Validar fecha de ingreso
  const fechaIngresoRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!fechaIngresoRegex.test(fechaIngreso)) {
    Swal.fire({
      title: "Error",
      text: "Por favor, ingresa una fecha de ingreso válida",
      icon: "error",
      });
      return;
      }

    // Validar tecnologías
      const tecnologiasVacias = tecnologias.some(
        (tecnologia) => tecnologia.nombre === "" || tecnologia.nivel === ""
      );
      if (tecnologiasVacias) {
        Swal.fire({
          title: "Error",
          text: "Por favor, selecciona una tecnología y nivel para todas las opciones",
          icon: "error",
        });
        return;
      }

    axios
      .post("/api/usuario/agregarusuario", usuario)
      .then((res) => {
        //alert(res.data)
        Swal.fire({
          title: "Felicidades",
          text: "El empleado se creó con éxito",
          icon: "success",
        }).then(() => {
          navegar("/");
        });
      })
      .then((err) => {
        console.log(err);
      });
  }

  function handleTecnologiaChange(e, index) {
    const { name, value } = e.target;
    const list = [...tecnologias];
    list[index][name] = value;
    setTecnologias(list);
  }

  function handleTecnologiaRemove(index) {
    const list = [...tecnologias];
    list.splice(index, 1);
    setTecnologias(list);
  }

  function handleTecnologiaAdd() {
    setTecnologias([...tecnologias, { nombre: "", nivel: "" }]);
  }

  return (
    <>
      <div className="container-fluid nav-container" style={{ backgroundColor: "#0B0560" }}>
    <div className="nav-links">
      <Link className="nav-link" to="/">
        <Button style={{ marginLeft: "50px"}}>
          <FaHome />
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
      <div className="CajaLogin">
        <h1 className="Olsoft">Agregar empleado</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Número de identificacion"
              value={identificacion}
              onChange={(e) => {
                setIdentificacion(e.target.value);
              }}
            />
          </div>
          <div>
          <input
              type="text"
              placeholder="Ciudad de residencia"
              value={ciudad}
              onChange={(e) => {
                setCiudad(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Correo electronico"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Telefono"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Fecha de ingreso: dd/mm/yyyy"
              value={fechaIngreso}
              onChange={(e) => {
                setFechaIngreso(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Fecha de salida, si aplica"
              value={fechaSalida}
              onChange={(e) => {
                setFechaSalida(e.target.value);
              }}
            />
          </div>
          <div>
          <select
                  name="nivel"
                  value={perfil}
                  onChange={(e) => setPerfil(e.target.value)}
                  style={{ marginLeft: "1px", marginTop: "20px" }}
          >
                  <option value="" default disabled>Seleccione un Perfil OL </option>
                  <option value="Junior">Junior</option>
                  <option value="Medio">Medio</option>
                  <option value="Master">Senior</option>
                  <option value="Senior">Master</option>
                </select>
          </div>
          <div>
            <textarea
              cols="50"
              rows="10"
              placeholder="Descripcion Personal"
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button type="button" onClick={handleTecnologiaAdd}>
              Agregar Tecnología
            </button>
            {tecnologias.map((item, index) => (
              <div key={index}>
                <select
                  name="nombre"
                  value={item.nombre}
                  onChange={(e) => handleTecnologiaChange(e, index)}
                >
                  <option value=""default disabled>Seleccione una tecnologia</option>
                  <option value="Amazon Web Services">
                    Amazon Web Services
                  </option>
                  <option value="Android">Android</option>
                  <option value="Angular">Angular</option>
                  <option value="C ++">C ++</option>
                  <option value="CSS">CSS</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Eclipse">Eclipse</option>
                  <option value="Fluter">Fluter</option>
                  <option value="Git">Git</option>
                  <option value="GlassFish">GlassFish</option>
                  <option value="HTML">HTML</option>
                  <option value="IBM Db2">IBM Db2</option>
                  <option value="IBM Integration Bus">
                    IBM Integration Bus
                  </option>
                  <option value="IntelliJ IDEA">IntelliJ IDEA</option>
                  <option value="Java">Java</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Jira">Jira</option>
                  <option value="Kotlin">Kotlin</option>
                  <option value="Laravel">Laravel</option>
                  <option value="MongoDB">MongoDB</option>
                  <option value="Microsoft SQL Server">
                    Microsoft SQL Server
                  </option>
                  <option value=".NET CORE">.NET CORE</option>
                  <option value="Node js">Node js</option>
                  <option value="Oracle Forms (Oracle)">
                    Oracle Forms (Oracle)
                  </option>
                  <option value="Oracle Reports (Oracle)">
                    Oracle Reports (Oracle)
                  </option>
                  <option value="PHP">PHP</option>
                  <option value="PL-SQL (Oracle)">PL-SQL (Oracle)</option>
                  <option value="PostgreSQL">PostgreSQL</option>
                  <option value="Postman">Postman</option>
                  <option value="Power BI">Power BI</option>
                  <option value="Product Owner">Product Owner</option>
                  <option value="Python">Python</option>
                  <option value="Ruby">Ruby</option>
                  <option value="React js">React js</option>
                  <option value="Scrum Product Owner">Scrum Product Owner</option>
                  <option value="Scrum Developer">Scrum Developer</option>
                  <option value="Scrum Master">Scrum Master</option>
                  <option value="Spring (JAVA)">Spring (JAVA)</option>

                  <option value="Swift">Swift</option>
                  <option value="Trello">Trello</option>
                  <option value="Vue">Vue</option>
                </select>

                <select
                  name="nivel"
                  value={item.nivel}
                  onChange={(e) => handleTecnologiaChange(e, index)}
                  style={{ marginLeft: "20px" }}
                >
                  <option value="" default disabled>Selecciona un nivel</option>
                  <option value="Junior">Junior</option>
                  <option value="Medio">Medio</option>
                  <option value="Senior">Senior</option>
                  <option value="Master">Master</option>
                </select>

                <button
                  type="button"
                  onClick={() => handleTecnologiaRemove(index)}
                  style={{ marginLeft: "20px" }}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              agregarUsuario();
            }}
          >
            Guardar empleado
          </button>
        </form>
      </div>
    </>
  );
}

export default AgregarUsuario;
