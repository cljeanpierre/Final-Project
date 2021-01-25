import React, { useEffect } from "react";
import { useQuestionContext } from "../utils/GlobalState";
import axios from "axios";

import Container from "../components/Questions-Page/Container/Container";
import Jumbotron from "../components/Questions-Page/Jumbotron/Jumbotron";
import Row from "../components/Questions-Page/Row/Row";
import Button from "../components/Questions-Page/Button/Button";
// import Col from "../components/Questions-Page/Col/Col";
import Card from "../components/Questions-Page/Card/Card";

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
                dispatch({ type: "gameOver" })

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
        <div className="container-fluid main-bg">
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
                <Jumbotron style={{ padding: "0.5rem" }}>
                    <h1>Which country does this flag belong to?</h1>
                </Jumbotron>
                <Card>
                <div className="card-group">
                
                        <Card>
                            <div className="card-body col d-flex align-items-center justify-content-center" style={{ backgroundColor: '#eee', borderRadius: '15px'}}>
                            <img className="img-fluid" style={{ borderRadius: "0.5rem", maxHeight: '500px' }} src={state.flag} />
                            </div>
                        </Card>
                        <Card>
                            <div className="card-body" style={{ backgroundColor: '#eee', borderRadius: '15px'}}>

                                <Button onClick={() => createQuestion(state.choice1)}>{state.choice1}</Button>

                                <Button onClick={() => createQuestion(state.choice2)}>{state.choice2}</Button>

                                <Button onClick={() => createQuestion(state.choice3)}>{state.choice3}</Button>

                                <Button onClick={() => createQuestion(state.choice4)}>{state.choice4}</Button>

                                <Button onClick={() => createQuestion(state.choice5)}>{state.choice5}</Button>

                            </div>
                        </Card>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Questions;