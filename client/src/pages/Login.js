import React, { useState } from "react";
import { useQuestionContext } from "../utils/GlobalState";
import { Link, useHistory } from "react-router-dom";

import InputBox from "../components/InputBox/inputBox";
import FlagDiv from "../components/FlagDiv/FlagDiv";
import LoginBtn from "../components/Button/SignUp_LoginBtns";
import Div from "../components/Div/Div";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";
import Container from "../components/Container/index";
import FlagImg from "../components/Img/FlagImg";
import Jumbotron from "../components/Jumbotron/index";


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
      "American Samoa": "AS",
      Bahamas: "BS",
      "Palestinian Territory, Occupied": "PS",
      "United Arab Emirates": "AE",
      "United Kingdom": "GB",
      "United datas": "US"
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

  const handleLogin = (e) => {
    e.preventDefault();
    API.loginAuth(state)
      .then(res => {
        console.log(res);
        dispatch({type: "setUsername", name: JSON.parse(res.config.data).email});
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
  };


  return (
    <Container width="max-content" margin="0rem auto" padding="0rem 0rem .2rem">

      <FlagDiv margin="0rem auto 2rem">
        {" "}
        {Object.values(data.flags).map(flag => (
          <FlagImg margin="1rem" flag={flag} />
        ))}{" "}
      </FlagDiv>

      <Title name={data.title} />{" "}

      <Div margin="2rem auto" alignItems="center">
        <Jumbotron margin="0rem auto" width="max-content">
          <InputBox
            onChange={HandleInputChange}
            name="email"
            padding=".5rem 2rem 0rem"
            placeholder={data.placeholder.username}
          />{" "}
          <InputBox
            onChange={HandleInputChange}
            name="password"
            padding="0rem 2rem .5rem"
            placeholder={data.placeholder.password}
          />
        </Jumbotron>

        <Div display="flex">
          <Link to={`/home`} role="button">
            <LoginBtn onClick={handleLogin}> Login </LoginBtn>
          </Link>
          <Link to={`/signup`} role="button">
            <LoginBtn> Sign Up </LoginBtn>{" "}
          </Link>
          <Link to={`/scores`} role="button">
            <LoginBtn> Highscores </LoginBtn>{" "}
          </Link>
        </Div>
      </Div>

      <FlagDiv margin="3rem auto 0rem">
        {" "}
        {Object.keys(data.flags2).map(flag => (
          <FlagImg margin="1rem" flag={flag} />
        ))}{" "}
      </FlagDiv>

      <Footer />
    </Container>
  );
}

export default Login;
