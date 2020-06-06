export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "SET_COUNTRY_BY_NAME": {
      const countryListByName = state.countryList.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, countryListByName };
    }
    case "FILTER_BY_REGION": {
      console.log("por region");
      const { regionSelected } = action.payload;

      if ("" === regionSelected) {
        return { ...state, coutryFilteredByRegion: [], filterByRegion: "" };
      }

      const coutryFilteredByRegion = state.countryList.filter(
        (country) => country.region === regionSelected
      );
      console.log(coutryFilteredByRegion);

      return {
        ...state,
        coutryFilteredByRegion,
        filterByRegion: regionSelected,
      };
    }
    default: {
      return state;
    }
  }
}
