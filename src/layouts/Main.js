import React from "react";
import { Switch, Route } from "react-router-dom";

import data from "../products.json";

import Catalog from "../pages/Catalog";
import About from "../pages/About";
import Home from "../pages/Home";

import { AppContext } from "../AppContext";

const products = data;

const Main = () => {
  return (
    <Switch>
      <AppContext.Provider value={{ products }}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/catalog" component={Catalog}></Route>
        <Route path="/about" component={About}></Route>
      </AppContext.Provider>
    </Switch>
  );
};

export default Main;
