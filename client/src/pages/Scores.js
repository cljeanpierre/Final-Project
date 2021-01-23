import React from "react";
import Container from "../components/Container";
// import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import List from "../components/List";
import ListItem from "../components/ListItem";
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