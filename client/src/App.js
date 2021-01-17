import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import { QuestionProvider } from "./utils/GlobalState"


function App() {

  return (
    <QuestionProvider>
      <Router>
        <Wrapper>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
        </Wrapper>
      </Router>
    </QuestionProvider>
  );
}

export default App;


