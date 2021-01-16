import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Button from "../components/Button";
import Col from "../components/Col";

function Questions() {
    return (
        <Container>
            <Row>
               <div className="card-body">
                   <h3>Scores</h3>
                </div> 
                <div className="card-body">
                   <h3>Question 1 of 1</h3>
                </div> 
                <div className="card-body">
                   <h3>Timer</h3>
                </div> 
            </Row>
        </Container>
    )
}

export default Questions;