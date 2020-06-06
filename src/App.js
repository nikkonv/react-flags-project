import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import CountryList from "./CountryList";
import reducer from "./reducer";
import ActionList from "./ActionsList";
import Header from "./Header";
import CountryPage from "./CountryPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route path="/">
            <ActionList />
            <CountryList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
