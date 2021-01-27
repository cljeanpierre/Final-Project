import React, { useEffect } from "react";
import { useQuestionContext } from "../utils/GlobalState";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import { View } from "react-native";
// import FlashMessage from "react-native-flash-message";

import Container from "../components/Questions-Page/Container/Container";
import Jumbotron from "../components/Questions-Page/Jumbotron/Jumbotron";
import Row from "../components/Questions-Page/Row/Row";
import Button from "../components/Questions-Page/Button/Button";
import Col from "../components/Questions-Page/Col/Col";
import Card from "../components/Questions-Page/Card/Card";

import Logo from "../quiz-logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faPlayCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


let firstRun;

function Questions() {

    //Hook into global context
    const [state, dispatch] = useQuestionContext();
    const history = useHistory();
    if (!state.isAuthenticated) {
        history.push("/login");
    }


    const addZero = (time) => {
        if (time < 10) {
            return "0" + time;
        } else {
            return time;
        }
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${addZero(minutes)}:${addZero(seconds)}`;
    }
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
            // setTimeout()
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
            dispatch({ type: "setQuestion", correctChoice: correctChoice, countryChoices: randomizeOrder(countryChoices), flag: flagImg, questionCount: state.questionCount, userScore: newScore });

        }
    };

    if (!state.gameOver) {

        return (
            <div className="container-fluid main-bg">
                <Container>
                    <Row>
                        <div className="card-body">
                            <h3>Score: {state.userScore}</h3>
                        </div>
                        <div className="card-body">
                            <h3>Question: {state.questionCount}</h3>
                        </div>
                        <div className="card-body">
                            <h3>Timer: {formatTime(state.timeLeft)} left</h3>
                        </div>
                    </Row>
                    <Jumbotron style={{ padding: "0.5rem" }}>
                        <h1>Which country does this flag belong to?</h1>
                    </Jumbotron>
                    <Card>
                        <div className="card-group">

                            <Card>
                                <div className="card-body col d-flex align-items-center justify-content-center" style={{ backgroundColor: '#eee', borderRadius: '15px' }}>
                                    <img className="img-fluid" style={{ borderRadius: "0.5rem", maxHeight: '500px' }} src={state.flag} />
                                </div>
                            </Card>
                            <Card>
                                <div className="card-body" style={{ backgroundColor: '#eee', borderRadius: '15px' }}>

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
        );
    } else {
        return (
            <div className="container-fluid main-bg">
                <Container>
                    <Jumbotron>
                        <img className="img-fluid mb-4" src={Logo} alt="logo"></img>
                        <br />
                        <h1 className="display-3">Game Over!</h1>
                        <br />
                        <h2>Your Final Score: {state.userScore}</h2>
                    </Jumbotron>
                    <Row>
                    <Col>
                        <Link to={`/questions`} role="button" className="btn btn-link">
                            <Button><FontAwesomeIcon icon={faPlayCircle} size="3x" /> Play Again</Button>
                        </Link>
                        </Col>
                        <Col>
                        <Link to={`/scores`} role="button" className="btn btn-link">
                            <Button><FontAwesomeIcon icon={faStarHalfAlt} size="3x" /> High Scores</Button>
                        </Link>
                        </Col>
                        <Col>
                        <Link to={`/login`} role="button" className="btn btn-link">
                            <Button><FontAwesomeIcon icon={faDoorOpen} size="3x" /> Logout</Button>
                        </Link>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Questions;