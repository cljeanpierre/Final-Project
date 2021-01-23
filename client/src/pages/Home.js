import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
// import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
// import Row from "../components/Row";
import Button from "../components/Button";
import { Link } from "react-router-dom"
import Logo from "../quiz-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faPlayCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


function Home(props) {
    return (
        <div className="container-fluid main-bg overflow-auto">
            <Container fluid>
                <Jumbotron>
                    <img className="img-fluid" src={Logo} alt="logo"></img>
                    <h1>Welcome User</h1>
                </Jumbotron>

                <div className="card-deck space-between mt-5">
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">Flag Quiz</h1>
                        </div>
                        <div className="card-body">
                        <Link to={`/questions`} role="button" className="btn btn-link">
                                <Button><FontAwesomeIcon icon={faPlayCircle} size="3x"/></Button>
                            </Link>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">High Scores</h1>
                        </div>
                        <div className="card-body">
                        <Link to={`/scores`} role="button" className="btn btn-link">
                                <Button><FontAwesomeIcon icon={faStarHalfAlt} size="3x"/></Button>
                            </Link>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">Logout</h1>
                        </div>
                        <div className="card-body">
                        <Link to={`/scores`} role="button" className="btn btn-link">
                                <Button><FontAwesomeIcon icon={faDoorOpen} size="3x"/></Button>
                            </Link>
                        </div>
                    </Card>
                </div>
                {/* <Card>
                <Link to={`/`} role="button">
                                <Button>Logout</Button>
                            </Link>
                </Card> */}
            </Container>
        </div>
    );
}

export default Home;
