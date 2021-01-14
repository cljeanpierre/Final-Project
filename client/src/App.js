import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const [question, setQuestion] = useState({
    flag: logo,
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    choiceE: "",
    correctChoice: ""
   });

  axios.get("https://restcountries.eu/rest/v2/all").then(res => {
    const citiesArray = res.data;
    const numOfCtries = citiesArray.length;
    const randChsnCtryIndx = Math.floor(Math.random()*numOfCtries);
    const chsnCtry = citiesArray[randChsnCtryIndx];  //Select a random country
    const flagImg = chsnCtry.flag;  // Take country's flag image
    const name = chsnCtry.name; // Take country's name

    let wrngChoiceCnt = 0;
    const wrngCntryChoices = [];

    while (wrngChoiceCnt<4) {  // Create 4 wrong answer choices
      const wrngCtryIndx = Math.floor(Math.random()*numOfCtries);
      // Do not accidentally choose the correct country as wrong answer or create duplicate wrong answers
      if (wrngCtryIndx!==randChsnCtryIndx && !wrngCntryChoices.includes(citiesArray[wrngCtryIndx])) { 
        wrngCntryChoices.push(citiesArray[wrngCtryIndx]);
        wrngChoiceCnt++;
      }
    } 

    setQuestion({...question, flag: flagImg, choiceA: name});
    console.log(flagImg);
    console.log(name);
    console.log(wrngCntryChoices);
    
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={question.flag} className="App-logo" alt="logo" />


      </div>
      <div className="App-intro">
        <h2>{question.choiceA}</h2>
        <h2>{question.choiceB}</h2>
        <h2>{question.choiceC}</h2>
        <h2>{question.choiceD}</h2>
        <h2>{question.choiceE}</h2>
      </div>
    </div>
  );
}


export default App;
