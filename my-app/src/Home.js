import React, { Component } from "react";
import Carousel from "./Carousel";
import {Route, HashRouter} from "react-router-dom";
import { Container, Row, Col} from "reactstrap";
import hazel from './static/ijsimages/home/hazelnoten.jpg';
import cash from './static/ijsimages/home/cashew.jpg';
import walnoot from './static/ijsimages/home/walnoot-in-schil.jpg';


class Home extends Component {
    render() {
        document.title = 'Roset - Home';
        return (
            <Container>
                <Row>
                    <Col sm="12" md="12">
                        <div className="card">
                            <div className="card-header">
                                specialiteiten deze week
                            </div>
                            <div className="card-content">
                                <div className="carousel">
                                    <HashRouter>
                                        <Route exact path="/" component={Carousel}/>
                                    </HashRouter>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="4">
                        <div className="card">
                            <div className="card-header">
                                Walnoten ijs
                            </div>
                            <div className="card-content">
                                <img className="responsive-img" alt="walnoten" src={walnoot} />
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="card">
                            <div className="card-header">
                                Hazelnoten ijs
                            </div>
                            <div className="card-content">
                                <img className="responsive-img" alt="hazelnoten" src={hazel} />
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="card">
                            <div className="card-header">
                                Cashewnoten ijs
                            </div>
                            <div className="card-content">
                                <img className="responsive-img" alt="cashew noten" src={cash} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;