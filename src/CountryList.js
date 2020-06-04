import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  border: 1px solid red;
  justify-content: center;
  padding: 4em 2em;
`;

export default function CountryList() {
  const [countryList, setCountryList] = useState([]);

  // hook para consumir una api
  useEffect(() => {
    // fetch es de js, en su lugar se puede usar axios, pero fetch funciona bien
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountryList(data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <CountryListStyled>
      {countryList.map(({ name, flag, population, region, capital }) => {
        return (
          <Country
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}
