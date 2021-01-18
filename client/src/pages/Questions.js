import React, { useEffect } from "react";
import { useQuestionContext } from "../utils/GlobalState";
import axios from "axios";

import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Button from "../components/Button";
import Col from "../components/Col";

function Questions() {
    const [state, dispatch] = useQuestionContext();

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                dispatch({ type: "loadCities", citiesArray: res.data });
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(()=> {
        console.log(state);
    }, [state]);

    const randomizeOrder = (answers) => {
        for (let i=answers.length-1; i>0; i--) {
            let j=Math.floor(Math.random()*(i+1));
            let temp = answers[i];
            answers[i]=answers[j];
            answers[j]=temp; 
        }
        return answers;
    }

    const createQuestion = (userAnswer) => {
        // if (userAnswer===state.correctChoice) {
        //     alert("correct answer");
        // }

        if (!state.loading) {
            const numOfCountries = state.citiesArray.length;
            const randomChosenCountryIndex = Math.floor(Math.random() * numOfCountries);
            const chosenCountry = state.citiesArray[randomChosenCountryIndex];  //Select a random country
            const flagImg = chosenCountry.flag;  // Take country's flag image
            const correctChoice = chosenCountry.name; // Take country's name

            let incorrectChoiceCount = 0;
            const countryChoices = [];

            while (incorrectChoiceCount < 4) {  // Create 4 wrong answer choices
                const incorrectCountryIndex = Math.floor(Math.random() * numOfCountries);
                // Do not accidentally choose the correct country as wrong answer or create duplicate wrong answers
                if (incorrectCountryIndex !== randomChosenCountryIndex && !countryChoices.includes(state.citiesArray[incorrectCountryIndex])) {
                    countryChoices.push(state.citiesArray[incorrectCountryIndex].name);
                    incorrectChoiceCount++;
                }
            }
            state.loading=true;
            countryChoices.push(correctChoice);
            console.log(flagImg);
            // console.log(correctChoice);
            // console.log(countryChoices);
            // console.log(randomizeOrder(countryChoices));
            

            dispatch({ type: "setQuestion", correctChoice: correctChoice, countryChoices: randomizeOrder(countryChoices), flag: flagImg, questionCount: state.questionCount });
            console.log(state);
        }
    };

    return (
        <Container>
            <Row>
                <div className="card-body">
                    <h3>Score {state.userScore}</h3>
                </div>
                <div className="card-body">
                    <h3>Question {state.questionCount}</h3>
                </div>
                <div className="card-body">
                    <h3>Timer</h3>
                </div>
            </Row>
            <Jumbotron>
                <h1 className="styling">Which country does this flag belong to?</h1>
            </Jumbotron>
            <Col>
                <Row>
                    <img height="100px" src={state.flag}/>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button onClick={()=>createQuestion(state.choice1)}>{state.choice1}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body" onClick={()=>createQuestion(state.choice1)}>
                        <Button>{state.choice2}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body" onClick={()=>createQuestion(state.choice1)}>
                        <Button>{state.choice3}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body" onClick={()=>createQuestion(state.choice1)}>
                        <Button>{state.choice4}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body" onClick={()=>createQuestion(state.choice1)} >
                        <Button>{state.choice5}</Button>
                    </div>
                </Row>
            </Col>
        </Container>
    )
}

export default Questions;