import React from "react";
import InputBox from "../components/Login-Page/InputBox/inputBox";
import FlagContainer from "../components/Login-Page/Flags/FlagContainer";
import LoginBtn from "../components/Login-Page/Button/SignUp_LoginBtns";
import Div from "../components/Login-Page/Div/Div"
import Footer from "../components/Login-Page/Footer/Footer";
import Title from "../components/Login-Page/Title/Title";
import Container from "../components/Login-Page/Container/Container";
import FlagImg from "../components/Login-Page/Flags/FlagImg";
import Jumbotron from "../components/Login-Page/Jumbotron/Jumbotron";
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
      EG: "Egypt",
      SV: "El Salvador",
      GQ: "Equatorial Guinea",
      ER: "Eritrea"
    }
  };

  return (
    
    <Container width="auto" margin="0 auto">
     
          <FlagContainer  margin="0 auto">
            {" "}
            {Object.values(data.flags).map(flag => (
              <FlagImg margin="1rem" flag={flag} />
            ))}{" "}
          </FlagContainer>

          <Div width="max-content" margin="2rem auto" >
            <Title name={data.title} />{" "}
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

            <Div margin="0 auto" >
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
          
          <FlagContainer margin="0 auto" >
            {" "}
            {Object.keys(data.flags2).map(flag => (
              <FlagImg margin="1rem" flag={flag} />
            ))}{" "}
          </FlagContainer>
        <Footer padding="0rem 0rem .9rem 0rem" />

       
       
    </Container>
   
  );
}

export default Login;
