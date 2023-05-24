import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Apps from "./principal";
import AgregarUsuario from "./usuarios/AgregarUsuario";
import EditarUsuario from "./usuarios/EditarUsuario"
import MostrarUsuario from "./usuarios/MostrarUsuario";

function App() {
  

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Apps />} />
          <Route path="/agregarusuario" element={<AgregarUsuario/>}exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>} exact></Route>
          <Route path='/mostrarusuario/:idusuario' element={<MostrarUsuario/>} exact></Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;