import React from "react";
import InputBox from "../components/InputBox/inputBox";
import FlagContainer from "../components/FlagDiv/FlagContainer";
import LoginBtn from "../components/Button/SignUp_LoginBtns";
import Div from "../components/Div/Div";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";
import Container from "../components/Container/index";
import FlagImg from "../components/Img/FlagImg";
import Jumbotron from "../components/Jumbotron/index";
import {Link} from "react-router-dom"

function Login() {
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
      Panama: "PA",
      "United Arab Emirates": "AE",
      "United Kingdom": "GB",
      "United datas": "US"
    },
    flags2: {
      CZ: "Czechia",
      CI: "Côte d'Ivoire",
      DK: "Denmark",
      DM: "Dominica",
      DO: "Dominican Republic (the)",
      EC: "Ecuador",
      EG: "Egypt",
      SV: "El Salvador",
      GQ: "Equatorial Guinea",
      ER: "Eritrea"
    }
  };

  return (
    <Container  width="max-content" margin="0 auto">
      <FlagContainer>
        {" "}
        {Object.values(data.flags).map(flag => (
          <FlagImg margin="1rem" flag={flag} />
        ))}{" "}
      </FlagContainer>

        <Title name={data.title} />{" "}

      <Div margin="2rem auto" alignItems="center">
        <Jumbotron margin="0rem auto" width="max-content">
          <InputBox
            padding=".5rem 2rem 0rem"
            usernamePlaceholder={data.placeholder.username}
          />{" "}
          <InputBox
            padding="0rem 2rem .5rem"
            usernamePlaceholder={data.placeholder.password}
          />
        </Jumbotron>

        <Div display="flex">
          <Link to={`/home`} role="button">
            <LoginBtn> Login </LoginBtn> 
          </Link>
          <Link to={`/signup`} role="button">
            <LoginBtn> Sign Up </LoginBtn>{" "}
          </Link>
          <Link to={`/scores`} role="button">
            <LoginBtn> Highscores </LoginBtn>{" "}
          </Link>
        </Div>
      </Div>

      <FlagContainer >
        {" "}
        {Object.keys(data.flags2).map(flag => (
          <FlagImg margin="1rem" flag={flag} />
        ))}{" "}
      </FlagContainer>

      <Footer />
    </Container>
  );
}

export default Login;
