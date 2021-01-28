import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Scores-Page/Container/Container";
// import Card from "../components/Card";
import Jumbotron from "../components/Scores-Page/Jumbotron/Jumbotron";
import List from "../components/Scores-Page/List/List";
import ListItem from "../components/Scores-Page/ListItem/ListItem";
import Row from "../components/Scores-Page/Row/Row";
import Button from "../components/Questions-Page/Button/Button";
import Col from "../components/Questions-Page/Col/Col";


import Logo from "../quiz-logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faPlayCircle, faHome } from '@fortawesome/free-solid-svg-icons';



// Need to add API calls to get scores from DB

function Scores() {
    return (
        <div>
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
                
                <Row>
                    <Col>
                        <Link to={`/questions`} role="button" className="btn btn-link" style={{ color: 'inherit'}}>
                            <Button><FontAwesomeIcon icon={faPlayCircle} size="3x" /> Play Again</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={`/home`} role="button" className="btn btn-link" style={{ color: 'inherit'}}>
                        <Button><FontAwesomeIcon icon={faHome} size="3x" /> Home</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={`/login`} role="button" className="btn btn-link" style={{ color: 'inherit'}}>
                        <Button><FontAwesomeIcon icon={faDoorOpen} size="3x" /> Logout</Button>
                        </Link>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Scores;