import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import CountryList from "./CountryList";
import reducer from "./reducer";
import ActionList from "./ActionsList";
import Header from "./Header";

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
        <Header />

        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
