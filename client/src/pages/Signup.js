import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import API from "../utils/API";
import { useQuestionContext } from "../utils/GlobalState";

import InputBox from "../components/SignUp-Page/InputBox/inputBox";
import FlagContainer from "../components/SignUp-Page/Flags/FlagContainer";
import Btn from "../components/SignUp-Page/Button/SignUp_LoginBtns";
import Div from "../components/SignUp-Page/Div/Div";
import Footer from "../components/SignUp-Page/Footer/Footer";
import Title from "../components/SignUp-Page/Title/Title";
import Container from "../components/SignUp-Page/Container/Container";
import FlagImg from "../components/SignUp-Page/Flags/FlagImg";
import Jumbotron from "../components/SignUp-Page/Jumbotron/Jumbotron";

function SignUp() {
  const history = useHistory();

  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const [globalState, dispatch] = useQuestionContext();

  const data = {
    placeholder: {
      username: "Enter a Username",
      password: "Enter a Password",
      reEnterPassword: "Re-enter Password"
    },
    title: "Sign Up",
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
      EC: "Ecuador",
      EG: "Egypt",
      SV: "El Salvador",
      GQ: "Equatorial Guinea",
      ER: "Eritrea"
    }
  };

  const handleSignup = e => {
    e.preventDefault();
    API.signUpAuth(state)
      .then(res => {
        dispatch({
          type: "setUsername",
          name: JSON.parse(res.config.data).username
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
    setState({ ...state, [name]: value });
  }

  return (
    <Container width="max-content" margin="0rem auto" padding="0rem 0rem .2rem">
    <FlagContainer margin="0rem auto 2rem">
      {" "}
      {Object.values(data.flags).map(flag => (
        <FlagImg margin="1rem" flag={flag} />
      ))}{" "}
    </FlagContainer>
    <Title name={data.title} />{" "}
    <Div margin="2rem auto" alignItems="center">
      <Jumbotron margin="0rem auto" width="max-content">
      <InputBox
          value={state.username}
          padding=".5rem 2rem 0rem"
          placeholder={data.placeholder.username}
          onChange={HandleInputChange}
          name="username"
        />
        <InputBox
          value={state.password}
          placeholder={data.placeholder.password}
          onChange={HandleInputChange}
          name="password"
        />
        <InputBox
          padding="0rem 0rem .5rem 0rem"
          placeholder={data.placeholder.reEnterPassword}
        />
      </Jumbotron>
      <Div>
        <Link to={`/`} role="Btn">
          <Btn> Login </Btn>
        </Link>
        <Link to={`/home`} role="Btn">
          <Btn onClick={handleSignup} > Sign Up </Btn>{" "}
        </Link>
        <Link to={`/scores`} role="Btn">
          <Btn> Highscores </Btn>{" "}
        </Link>
      </Div>
    </Div>

    <FlagContainer margin="0 auto">
      {" "}
      {Object.keys(data.flags2).map(flag => (
        <FlagImg margin="1rem" flag={flag} />
      ))}{" "}
    </FlagContainer>
    <Footer padding="0rem 0rem .9rem 0rem" />
  </Container>
  );
}

export default SignUp;
