import React from "react";
import InputBox from "../components/InputBox/inputBox";
import FlagContainer from "../components/FlagDiv/FlagContainer";
import LoginBtn from "../components/Button/SignUp_LoginBtns";
import Div from "../components/Div/Div";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";
import Container from "../components/Container/index";
import SignUpFlag from "../components/Img/SignupFlag";
import Jumbotron from "../components/Jumbotron/index";
import {Link} from "react-router-dom"


function SignUp() {
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
    <Container width="max-content" margin="0rem auto" >

      <FlagContainer>
        {" "}
        {Object.values(data.flags).map(flag => (
          <SignUpFlag margin="1rem" flag={flag} />
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
            usernamePlaceholder={data.placeholder.password}
          />
          <InputBox
            padding="0rem 0rem .5rem 0rem"
            usernamePlaceholder={data.placeholder.reEnterPassword}
          />
        </Jumbotron>

        <Div margin="0 auto" display="flex">
          <Link to={`/`} role="button">
            <LoginBtn> Login </LoginBtn> 
          </Link>
          <Link to={`/home`} role="button">
            <LoginBtn> Sign Up </LoginBtn>{" "}
          </Link>
        </Div>
      </Div>

      <FlagContainer>
        {" "}
        {Object.keys(data.flags2).map(flag => (
          <SignUpFlag margin="1rem" flag={flag} />
        ))}{" "}
      </FlagContainer>

      <Footer/>
    </Container>
  );
}

export default SignUp;
