import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Questions from "./pages/Questions";


function App() {
  return (
    <Router>
    <div>
      <Wrapper>
      <Route exact path="/home" component={Home} />
      <Route exact path="/questions" component={Questions} />
      </Wrapper>
    </div>
    </Router>
  );
}


export default App;
