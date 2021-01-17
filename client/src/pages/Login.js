import React from "react";
import InputBox from "../components/InputBox/inputBox";
import FlagDiv from "../components/FlagDiv/FlagDiv";
import LoginBtn from "../components/Button/LoginBtn";
import Div from "../components/Div/Div";
import Footer from "../components/FooterDiv/Footer/Footer";
import FooterDiv from "../components/FooterDiv/FooterDiv";
import TitleDiv from "../components/Title/TitleDiv";
import Title from "../components/Title/Title";
import Background from "../components/Background/Div";
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
    <div>
      <Background bgColor="cream">
        <FlagDiv margin="0rem auto 2rem">
          {Object.values(data.flags).map(flag => (
            <FlagImg margin="1rem" flag={flag} />
          ))}
        </FlagDiv>

        <TitleDiv>
          <Title name={data.title} />
        </TitleDiv>
        
          <Div margin="2rem auto" alignItems="center">
          <Jumbotron margin="0rem auto" width="max-content">
        
              <InputBox padding= "2rem 2rem 0rem" usernamePlaceholder={data.placeholder.username} />
              <InputBox padding= "0rem 2rem 2rem" usernamePlaceholder={data.placeholder.password} />
            
            </Jumbotron>

            <Div display="flex">
              <LoginBtn>Login</LoginBtn>
              <LoginBtn>Sign Up </LoginBtn>
              <LoginBtn>Highscores</LoginBtn>
            </Div>
            
          </Div>
       

        <FlagDiv margin="3rem auto 0rem">
          {Object.keys(data.flags2).map(flag => (
            <FlagImg margin="1rem" flag={flag} />
          ))}
        </FlagDiv>

        <FooterDiv>
          <Footer />
        </FooterDiv>
      </Background>
    </div>
  );
}

export default Login;
