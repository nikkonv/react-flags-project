import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  .dark-mode {
    cursor: pointer;
    .moon {
      margin-right: 10px;
      transform: rotate(-30deg);
      display: inline-flex;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default function Header({ setDarkMode, darkMode }) {
  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {darkMode ? (
                  <i class="fas fa-moon"></i>
                ) : (
                  <i class="far fa-moon"></i>
                )}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}
