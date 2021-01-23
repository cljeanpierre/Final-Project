import React, { useEffect } from "react";
import { useQuestionContext } from "../utils/GlobalState";
import axios from "axios";

import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Button from "../components/Button";
import Col from "../components/Col";

let firstRun;

function Questions() {

    //Hook into global context
    const [state, dispatch] = useQuestionContext();


    //Make API call to get array of countries with all of their information
    useEffect(() => {
        firstRun = true;
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                dispatch({ type: "loadCities", citiesArray: res.data });
            })
            .catch(err => console.log(err));
    }, []);

    //Refresh the page when the state changes
    useEffect(() => {
        console.log(state);
        let timeLeft = state.timeLeft;
        if (firstRun && !state.loading) {

            createQuestion();
            firstRun = false;
        }

        const quizTimeout = setTimeout(() => {
            timeLeft = state.timeLeft - 1;
            if (timeLeft < 0) {
                dispatch({type: "gameOver"})

            } else {
                dispatch({ type: "updateTime", timeLeft: timeLeft });
            }
            
        }, 1000);

    }, [state]);

    //Create a random order for multiple choice country names
    const randomizeOrder = (answers) => {
        for (let i = answers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp;
        }
        return answers;
    }

    //Create a question using the questions array from the global state
    const createQuestion = (userAnswer) => {
        let newScore = state.userScore;

        if (userAnswer === state.correctChoice) {
            newScore = state.userScore + 10;
        } else {
            if (state.questionCount !== 0) {
                newScore = state.userScore - 1;
            }
        }

        if (!state.loading && !state.gameOver) {
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
            state.loading = true;
            countryChoices.push(correctChoice);
            console.log(flagImg);
            // console.log(correctChoice);
            // console.log(countryChoices);
            // console.log(randomizeOrder(countryChoices));
            dispatch({ type: "setQuestion", correctChoice: correctChoice, countryChoices: randomizeOrder(countryChoices), flag: flagImg, questionCount: state.questionCount, userScore: newScore });

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
                    <h3>Timer: {state.timeLeft} secs</h3>
                </div>
            </Row>
            <Jumbotron>
                <h1 className="styling">Which country does this flag belong to?</h1>
            </Jumbotron>
            <Col>
                <Row>
                    <img style={{ borderRadius: "0.5rem" }} height="100px" src={state.flag} />
                </Row>
                <Row>
                    <div className="card-body">
                        <Button onClick={() => createQuestion(state.choice1)}>{state.choice1}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button onClick={() => createQuestion(state.choice2)}>{state.choice2}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button onClick={() => createQuestion(state.choice3)}>{state.choice3}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button onClick={() => createQuestion(state.choice4)}>{state.choice4}</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button onClick={() => createQuestion(state.choice5)}>{state.choice5}</Button>
                    </div>
                </Row>
            </Col>
        </Container>
    )
}

export default Questions;