import React from "react";
import Container from "../components/Home-Page/Container/Container";
import Card from "../components/Home-Page/Card/Card";
// import Col from "../components/Col";
import Jumbotron from "../components/Home-Page/Jumbotron/Jumbotron";
// import Row from "../components/Row";
import Button from "../components/Home-Page/Button/Button";
import { Link, useHistory } from "react-router-dom";
import Logo from "../quiz-logo.png";

import { useQuestionContext } from "../utils/GlobalState";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faPlayCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';



function Home(props) {
    const history = useHistory();
    const [globalState, dispatch] = useQuestionContext();
    if (!globalState.isAuthenticated) {
        history.push("/login");
    }
    return (
        <div className="container">
            <Container>
                <Jumbotron>
                    <img className="img-fluid" src={Logo} alt="logo"></img>
                    <h1>Welcome {globalState.userName}</h1>
                </Jumbotron>

                <div className="card-deck space-between mt-5">
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">Flag Quiz</h1>
                        </div>
                        <div className="card-body">
                        <Link to={`/questions`} role="button" className="btn btn-link" style={{ color: 'inherit'}}>
                                <Button><FontAwesomeIcon icon={faPlayCircle} size="3x"/></Button>
                            </Link>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">High Scores</h1>
                        </div>
                        <div className="card-body">
                        <Link to={`/scores`} role="button" className="btn btn-link" style={{ color: 'inherit'}}>
                                <Button><FontAwesomeIcon icon={faStarHalfAlt} size="3x"/></Button>
                            </Link>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <h1 className="card-title">Logout</h1>
                        </div>
                        <div className="card-body">
                        <Link to={`/scores`} role="button" className="btn btn-link" style={{ color: 'inherit'}}>
                                <Button><FontAwesomeIcon icon={faDoorOpen} size="3x"/></Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default Home;
