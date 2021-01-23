import React from "react";
import InputBox from "../components/SignUp-Page-Components/InputBox/inputBox";
import FlagContainer from "../components/SignUp-Page-Components/Flags/FlagContainer";
import Btn from "../components/SignUp-Page-Components/Button/SignUp_LoginBtns";
import Div from "../components/SignUp-Page-Components/Div/Div";
import Footer from "../components/SignUp-Page-Components/Footer/Footer";
import Title from "../components/SignUp-Page-Components/Title/Title";
import Container from "../components/SignUp-Page-Components/Container/Container";
import FlagImg from "../components/SignUp-Page-Components/Flags/FlagImg";
import Jumbotron from "../components/SignUp-Page-Components/Jumbotron/Jumbotron";
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

      <Div margin="2rem auto" alignItems="center">
        <FlagContainer>
          {" "}
          {Object.values(data.flags).map(flag => (
            <FlagImg margin="1rem" flag={flag} />
          ))}{" "}
        </FlagContainer>


        <Div margin="2rem auto" alignItems="center">
          <Title name={data.title} />{" "}
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
              <Btn> Login </Btn> 
            </Link>
            <Link to={`/home`} role="button">
              <Btn> Sign Up </Btn>{" "}
            </Link>
          </Div>
        </Div>

        <FlagContainer>
          {" "}
          {Object.keys(data.flags2).map(flag => (
            <FlagImg margin="1rem" flag={flag} />
          ))}{" "}
        </FlagContainer>

        <Footer/>
      </Div>
      
    </Container>
  );
}

export default SignUp;
