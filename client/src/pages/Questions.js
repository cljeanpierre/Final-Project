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
                    <h3>Score</h3>
                </div>
                <div className="card-body">
                    <h3>Question 1 of 1</h3>
                </div>
                <div className="card-body">
                    <h3>Timer</h3>
                </div>
            </Row>
            <Jumbotron>
                <h1 class="styling">Which country does this flag belong to?</h1>
            </Jumbotron>
            <Col>
                <Row>
                    <div className="card-body">
                        <Button>Argentina</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button>South Africa</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button>Germany</Button>
                    </div>
                </Row>
                <Row>
                    <div className="card-body">
                        <Button>Canada</Button>
                    </div>
                </Row>
            </Col>
        </Container>
    )
}

export default Questions;