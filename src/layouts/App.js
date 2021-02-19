import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
// import { AppContext, defaultObject } from "../AppContext";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <header>{<Header />}</header>

      <Main />

      <Footer />
    </Router>
  );
};

export default App;
