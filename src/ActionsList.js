import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { Region as FilterByRegion } from "./Region";

const ActionsListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export default function ActionsList() {
  return (
    <ActionsListStyled>
      <Search />
      <FilterByRegion />
    </ActionsListStyled>
  );
}
