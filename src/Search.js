import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "./Input";

const SearchStyled = styled.div``;

export default function Search() {
  const [inputValue, setInputValue] = useState(""); // to filter by name
  const dispatch = useDispatch();
  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: e.target.value,
    });
  };

  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });
    setInputValue("");
  };

  return (
    <SearchStyled>
      <Input
        placeholder="Search for a country..."
        value={inputValue}
        onChange={filterByName}
      />
      {inputValue && <button onClick={clearInput}>X</button>}
    </SearchStyled>
  );
}
