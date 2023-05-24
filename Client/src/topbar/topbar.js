import React, { useState } from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: ${(props) => props.theme.text};
  width: 79vw;
`;

const SearchBar = styled.input`
  margin: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  flex: 1;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  margin: 10px;
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

const Title = styled.h1`
  margin-right: 50px;
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

export function Topbar(props) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    props.onSearch(event.target.value);
  }

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

  return (
    <TopBarContainer>
      <Link className="nav-link" to="/agregarusuario">
        <Button>
          <BsPersonFillAdd />
        </Button>
      </Link>

      <SearchBar type="text" placeholder="Buscar..." onChange={handleChange} />

      <Button onClick={props.onToggleTheme}>
        {props.isDarkMode ? <FaSun /> : <FaMoon />}
      </Button>

      <Button onClick={handleProfileClick}>
        <CgProfile />
      </Button>

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
    </TopBarContainer>
  );
}
