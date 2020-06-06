import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import CountryList from "./CountryList";
import reducer from "./reducer";
import ActionList from "./ActionsList";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <i class="far fa-moon"></i>
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
