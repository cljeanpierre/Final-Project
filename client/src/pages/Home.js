import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
// import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
// import Row from "../components/Row";
import Button from "../components/Button";
import { Link } from "react-router-dom"
import Logo from "../quiz-logo.png";


function Home(props) {
    return (
        <div className="container-fluid main-bg overflow-auto">
            <Container fluid>
                <Jumbotron>
                    <img className="img-fluid" src={Logo} alt="logo"></img>
                    <h1>Welcome User</h1>
                </Jumbotron>

                <div className="card-deck space-between mb-3">
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">Game Choice</h1>
                            <br></br>
                            <Link to={`/questions`} role="button" className="btn btn-link">
                                <Button>Play</Button>
                            </Link>

                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">High Scores</h1>
                            <br></br>
                            <Link to={`/scores`} role="button" className="btn btn-link">
                                <Button>View</Button>
                            </Link>
                        </div>
                    </Card>
                </div>
                <Card>
                <Link to={`/`} role="button">
                                <Button>Logout</Button>
                            </Link>
                </Card>
            </Container>
        </div>
    );
}

export default Home;
