import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Questions from "./pages/Questions";
import { QuestionProvider } from "./utils/GlobalState"

function App() {
  return (
    <QuestionProvider>
      <Router>
        <div>
          <Wrapper style={{ padding: "0rem" }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/scores" component={Scores} />
          </Wrapper>
        </div>
      </Router>
    </QuestionProvider>
  );
}
export default App;