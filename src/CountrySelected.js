import React from "react";
import styled from "styled-components";

const CountrySelectedStyled = styled.div`
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
    margin-top: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .languages {
    span {
      &:after {
        content: ", ";
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  .border-item {
    padding: 0.2em 1em;
    border-radius: 5px;
    margin-right: 4px;
    margin-left: 4px;
    margin-bottom: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: inline-flex;
    background: var(--white);
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function CountrySelected({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
}) {
  return (
    <CountrySelectedStyled>
      <img src={flag} alt="" />
      <div style={{ marginTop: "2em" }}>
        <h2>{name}</h2>
        <div className="grid">
          <div>
            <p>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong> {topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong> {currencies.map((item) => item.name)}
            </p>
            <p className="languages">
              <strong>Languages:</strong>{" "}
              {languages.map((item) => (
                <span>{item.name}</span>
              ))}
            </p>
          </div>
        </div>
        <p className="borders">
          <strong>Border Countries:</strong>{" "}
          {borders.map((item) => (
            <span className="border-item">{item}</span>
          ))}
        </p>
      </div>
    </CountrySelectedStyled>
  );
}
