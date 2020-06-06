import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  background: white;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  padding: 0 2rem;
  border-radius: 5px;
  i {
    margin-right: 1em;
    color: #c4c4c4;
  }
  input {
    flex: 1;
    width: 100%;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`;

export default function Input({ ...props }) {
  return (
    <InputStyled>
      <i class="fas fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  );
}
