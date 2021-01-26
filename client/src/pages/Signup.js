import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import API from "../utils/API";
import { useQuestionContext } from "../utils/GlobalState";

import InputBox from "../components/InputBox/inputBox";
import FlagDiv from "../components/FlagDiv/FlagDiv";
import LoginBtn from "../components/Button/SignUp_LoginBtns";
import Div from "../components/Div/Div";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";
import Container from "../components/Container/index";
import SignUpFlag from "../components/Img/SignupFlag";
import Jumbotron from "../components/Jumbotron/index";

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

  const handleSignup = (e) => {
    e.preventDefault();
    API.signUpAuth(state)
      .then(res => {
        dispatch({type: "setUsername", name: JSON.parse(res.config.data).username});
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
    setState({...state,
      [name]: value});
  };


  return (
    <Container width="max-content" margin="0rem auto" >

      <FlagDiv margin="0rem auto 2rem">
        {" "}
        {Object.values(data.flags).map(flag => (
          <SignUpFlag margin="1rem" flag={flag} />
        ))}{" "}
      </FlagDiv>

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

        <Div margin="0 auto" display="flex">
          <Link to={`/`} role="button">
            <LoginBtn> Login </LoginBtn>
          </Link>
          <Link to={`/home`} role="button">
            <LoginBtn onClick={handleSignup}> Sign Up </LoginBtn>{" "}
          </Link>
        </Div>
      </Div>

      <FlagDiv margin="2.3rem auto 0rem">
        {" "}
        {Object.keys(data.flags2).map(flag => (
          <SignUpFlag margin="1rem" flag={flag} />
        ))}{" "}
      </FlagDiv>

      <Footer />
    </Container>
  );
}

export default SignUp;
