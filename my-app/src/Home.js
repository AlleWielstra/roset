import React, { Component } from "react";
import Carousel from "./Carousel";
import {Route, HashRouter} from "react-router-dom";
import { Container, Row, Col} from "reactstrap";
import hazel from './static/ijsimages/home/hazelnoten.jpg';
import cash from './static/ijsimages/home/cashew.jpg';
import walnoot from './static/ijsimages/home/walnoot-in-schil.jpg';


class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
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
                    <Col>
                        <div className="card">
                            <div className="card-header">
                                Walnoten ijs
                            </div>
                            <div className="card-content">
                                <img className="responsive-img" src={walnoot} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-header">
                                Hazelnoten ijs
                            </div>
                            <div className="card-content">
                                <img className="responsive-img" src={hazel} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-header">
                                Cashewnoten ijs
                            </div>
                            <div className="card-content">
                                <img className="responsive-img" src={cash} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;