import React, {Component} from "react";
import InputBox from "./components/InputBox/inputBox";
import Card from "./components/Card/Card"
import FlagDiv from "./components/FlagDiv/FlagDiv";
import LoginBtn from "./components/Buttons/Login";
import SignUpBtn from "./components/Buttons/SignUp";
import HighScoreBtn from "./components/Buttons/HighScores";
import Div from "./components/Div/Div";
import Footer from "./components/FooterDiv/Footer/Footer";
import FooterDiv from "./components/FooterDiv/FooterDiv";
import TitleDiv from "./components/Title/TitleDiv";
import Title from "./components/Title/Title";
import Background from "./components/Background/Div";
import Flags from './components/Img/Img';
import './App.css';
import './Bootstrap.css';
import BackgroundImg from "./components/Background/bgImg"


class App extends Component {
  state = {
    placeholder:{
      username: "Enter Username",
      password: "Enter Password"
    },
    title:"Geographic Trivia",
    flags:{
      'Aland Islands': 'AX',
      'Albania': 'AL',
      'Algeria': 'DZ',
      'American Samoa': 'AS',
      'Azerbaijan': 'AZ',
      'Bahamas': 'BS',
      'Palestinian Territory, Occupied': 'PS',
      'Panama': 'PA',
      'United Arab Emirates': 'AE',
      'United Kingdom': 'GB',
      'United States': 'US',
  }
  };

 



  
  render(){
    return (
      <div>
        
        <Background>
          <FlagDiv margin='0rem auto 2rem'>   
            {Object.values(this.state.flags).map( flag => (
              <Flags margin='1rem' flag={flag}/>
            ))}
          </FlagDiv>
          <BackgroundImg>
          <TitleDiv>
            <Title name={this.state.title}/>
          </TitleDiv>

          <Div margin="2rem auto"alignItems='center'>
            <Card bGcolor="wheat">
              <Div margin="0rem auto 1.5rem">
                <InputBox usernamePlaceholder={this.state.placeholder.username}/>
              </Div> 
              <Div>
                <InputBox usernamePlaceholder={this.state.placeholder.password}/>
              </Div>
            </Card>

            <Div display ="flex">      
                <LoginBtn/>
                <SignUpBtn/>          
                <HighScoreBtn/>      
            </Div>
          </Div>
          </BackgroundImg>

          <FlagDiv margin="3rem auto">   
            {Object.values(this.state.flags).map( flag => (
              <Flags margin='1rem' flag={flag}/>
            )) } 
           
          </FlagDiv>

          <FooterDiv>
            <Footer/>
          </FooterDiv>
        </Background>
       
      </div>
    );
  }
}

export default App;
