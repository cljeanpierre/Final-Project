import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Button from "../components/Button";
import {Link} from "react-router-dom"

function Home(props) {
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
                            <Link to={`/questions`} role="button" className="btn btn-link">
                            <Button>Play</Button>
                            </Link>
                           
                        </div>
                        <div className="card-body">
                            <h1 className="lead">High Scores</h1>
                            <br></br>
                            <Button>View</Button>
                        </div>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default Home;
