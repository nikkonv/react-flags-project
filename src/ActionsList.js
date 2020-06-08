import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { Region as FilterByRegion } from "./Region";
import Wrapper from "./Wrapper";

const ActionsListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 200px;
    }
  }
`;

export default function ActionsList() {
  return (
    <ActionsListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <span></span>
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionsListStyled>
  );
}
