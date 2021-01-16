import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login"
function App() {
  return (
    <Router>
    <div>
      <Wrapper style={{padding:"0rem"}}>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      </Wrapper>
    </div>
    </Router>
  );
}
export default App;