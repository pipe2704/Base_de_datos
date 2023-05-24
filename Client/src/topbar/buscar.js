import styled from "styled-components";
import React, { useState } from "react";

const SearchBar = styled.input`
  margin: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  flex: 1;
`;

function NameInput() {
  function handleChange(event) {}

  return (
    <div>
      <SearchBar type="text" placeholder="Buscar..." onChange={handleChange} />
    </div>
  );
}

export default NameInput;
