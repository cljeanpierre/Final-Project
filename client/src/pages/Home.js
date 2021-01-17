import React, { useEffect } from "react";
import { useQuestionContext } from "../utils/GlobalState";
import axios from "axios";

import Container from "../components/Container";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Button from "../components/Button";

function Home() {

    const [state, dispatch] = useQuestionContext();

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                dispatch({ type: "loadCities", citiesArray: res.data });
            })
            .catch(err => console.log(err));
    }, []);

    const randomizeOrder = (answers) => {
        for (let i=answers.length-1; i>0; i--) {
            let j=Math.floor(Math.random()*(i+1));
            let temp = answers[i];
            answers[i]=answers[j];
            answers[j]=temp; 
        }
        return answers;
    }


    const createQuestion = () => {

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
            console.log(correctChoice);
            console.log(countryChoices);
            console.log(randomizeOrder(countryChoices));
            console.log(state);

            dispatch({ type: "setQuestion", correctChoice: correctChoice, countryChoices: countryChoices });

        }
    };

    // createQuestion();
    return (
        <div>
            <Container>
                <Card>
                    <Jumbotron>
                        <h1>Welcome User</h1>
                    </Jumbotron>
                    <Row>
                        <div className="card-body">
                            <h1 className="lead">Game Choice</h1>
                            <br></br>
                            <Button onClick={createQuestion}>Play</Button>
                            <a href="#" onClick={createQuestion}>Play</a>
                        </div>
                        <div className="card-body">
                            <h1 className="lead">High Scores</h1>
                            <br></br>
                            <Button>View</Button>
                        </div>
                    </Row>
                </Card>
                {!state.loading?<Card> </Card>:null}
            </Container>

            {/* <div className="App">
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
            </div> */}
        </div>
    );
}

export default Home;
