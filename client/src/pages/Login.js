import React, { useState } from "react";
import { useQuestionContext } from "../utils/GlobalState";
import { Link, useHistory } from "react-router-dom";

import InputBox from "../components/Login-Page/InputBox/inputBox";
import FlagContainer from "../components/Login-Page/Flags/FlagContainer";
import Btn from "../components/Login-Page/Button/Button";
import Div from "../components/Login-Page/Div/Div";
import Footer from "../components/Login-Page/Footer/Footer";
import Title from "../components/Login-Page/Title/Title";
import Container from "../components/Login-Page/Container/Container";
import FlagImg from "../components/Login-Page/Flags/FlagImg";
import Jumbotron from "../components/Login-Page/Jumbotron/Jumbotron";

import API from "../utils/API";
function Login() {
  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const [globalState, dispatch] = useQuestionContext();

  const data = {
    placeholder: {
      username: "Enter Username",
      password: "Enter Password"
    },
    title: "Geographic Trivia",
    flags: {
      "Aland Islands": "AX",
      Albania: "AL",
      Algeria: "DZ",
      Bahamas: "BS",
      "Palestinian Territory, Occupied": "PS",
      "United Arab Emirates": "AE",
      "United Kingdom": "GB",
      "United states": "US",
      "American Samoa": "AS"
    },
    flags2: {
      CZ: "Czechia",
      AZ: "Azerbaijan",
      DK: "Denmark",
      DM: "Dominica",
      DO: "Dominican Republic (the)",
      EG: "Egypt",
      SV: "El Salvador",
      GQ: "Equatorial Guinea",
      ER: "Eritrea"
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    API.loginAuth(state)
      .then(res => {
        console.log(res);
        dispatch({
          type: "setUsername",
          name: JSON.parse(res.config.data).email
        });
        history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
  };

  function HandleInputChange(event) {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <Container width="max-content" margin="0rem auto" padding="0rem 0rem .2rem">
      <FlagContainer margin="0rem auto 2rem" >
        {" "}
        <Div margin="0 auto">
        {Object.values(data.flags).map(flag => (
          <FlagImg margin=".7rem" flag={flag} />
        ))}{" "}
        </Div>
      </FlagContainer>
      <Div margin="2rem auto" alignItems="center">
        <Jumbotron margin="0rem auto" width="max-content">
        <Title/>
          <InputBox
            onChange={HandleInputChange}
            name="email"
            padding=".5rem 2rem 0rem"
            placeholder={data.placeholder.username}
          />{" "}
          <InputBox
            onChange={HandleInputChange}
            name="password"
            padding="0rem 2rem"
            placeholder={data.placeholder.password}
            type="password"
          />
        <Div margin="0 auto">
          <Link to={`/home`} role="Btn">
            <Btn onClick={handleLogin}> Login </Btn>
          </Link>
          <Link to={`/signup`} role="Btn">
            <Btn margin="0 1.2rem"> Sign Up </Btn>{" "}
          </Link>
          <Link to={`/scores`} role="Btn">
            <Btn> Scores </Btn>{" "}
          </Link>
        </Div>
        </Jumbotron>

      </Div>

      <FlagContainer margin="0 auto">
        {" "}
        <Div margin="0 auto">
        {Object.keys(data.flags2).map(flag => (
          <FlagImg margin=".7rem" flag={flag} />
        ))}{" "}
        </Div>
      </FlagContainer>
      <Footer/>
    </Container>
  );
}

export default Login;
