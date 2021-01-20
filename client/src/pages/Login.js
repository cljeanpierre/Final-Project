import React from "react";
import InputBox from "../components/InputBox/inputBox";
import FlagDiv from "../components/FlagDiv/FlagDiv";
import LoginBtn from "../components/Button/SignUp_LoginBtns";
import Div from "../components/Div/Div";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";
import Container from "../components/Container/index";
import FlagImg from "../components/Img/FlagImg";
import Jumbotron from "../components/Jumbotron/index";

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
            padding=".5rem 2rem 0rem"
            usernamePlaceholder={data.placeholder.username}
          />{" "}
          <InputBox
            padding="0rem 2rem .5rem"
            usernamePlaceholder={data.placeholder.password}
          />
        </Jumbotron>

        <Div display="flex">
          <LoginBtn> Login </LoginBtn> <LoginBtn> Sign Up </LoginBtn>{" "}
          <LoginBtn> Highscores </LoginBtn>{" "}
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