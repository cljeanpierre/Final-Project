import React from "react";
import Container from "../components/Scores-Page/Container/Container";
// import Card from "../components/Card";
import Jumbotron from "../components/Scores-Page/Jumbotron/Jumbotron";
import List from "../components/Scores-Page/List/List";
import ListItem from "../components/Scores-Page/ListItem/ListItem";
// import Row from "../components/Row";
// import Button from "../components/Button";
import Logo from "../quiz-logo.png";


// Need to add API calls to get scores from DB

function Scores() {
    return (
        <div className="container-fluid main-bg">
            <Container>
                    <Jumbotron>
                        <img className="img-fluid" src={Logo} alt="logo"></img>
                        <h1>High Scores</h1>
                    </Jumbotron>

                    <List>
                        {/* Need to add map function to display scores from DB */}
                        <ListItem>
                            Username & Score Placeholder
                    </ListItem>
                    <ListItem>
                            Username & Score Placeholder
                    </ListItem>
                    <ListItem>
                            Username & Score Placeholder
                    </ListItem>
                    </List>
            </Container>
        </div>
    );
}

export default Scores;