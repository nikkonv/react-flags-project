import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Country from "./Country";
import Wrapper from "./Wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-column-gap: 75px;
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`;

export default function CountryList() {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  // hook para consumir una api
  useEffect(() => {
    // fetch es de js, en su lugar se puede usar axios, pero fetch funciona bien
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
      })
      .catch(() => {
        console.log("error");
      });
  }, [dispatch]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
