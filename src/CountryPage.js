import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { useSelector } from "react-redux";
import CountrySelected from "./CountrySelected";

const CountryPageStyled = styled.div`
  .back {
    margin-top: 1em;
    cursor: pointer;
    border-radius: 5px;
    background: var(--white);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    padding: 0.7em 1.5em;
    border: none;
    i {
      margin-right: 10px;
      color: var(--black);
    }
    span {
      color: var(--black);
    }
  }
`;

export default function CountryPage({ match, history }) {
  let DBcountry = useSelector((state) =>
    state.countryList.find(
      (item) =>
        item.cioc === match.params.id.replace(/-/g, " ") ||
        item.name === match.params.id.replace(/-/g, " ")
    )
  );
  const [country, setCountry] = useState(DBcountry);

  console.log(country);
  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCountry(data[0]);
        });
    }
  }, [country, match.params.id]);
  function handleClick() {
    history.goBack();
  }
  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left"></i>
          <span>Back</span>
        </button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  );
}
