import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import appel from './static/ijsimages/roomijs/Roomijs_Appeltaart.jpg';
import belg from './static/ijsimages/roomijs/Roomijs_Belgian_Chocolate.jpg';
import bour from './static/ijsimages/roomijs/Roomijs_Bourbon_Vanille.jpg';
import kara from './static/ijsimages/roomijs/Roomijs_Karamel.jpg';
import malag from './static/ijsimages/roomijs/Roomijs_Malaga.jpg';
import amarena from './static/ijsimages/roomijs/Roomijs_Vanille_Amarene.jpg';


class Roomijs extends Component {
    render() {
        return (
            <div className="roomijs-page">
                <Container>
                    <Row>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={appel} />
                                </div>
                                <div className="card-footer black-text">
                                    Roomijs appeltaart
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={belg} />
                                </div>
                                <div className="card-footer black-text">
                                    Roomijs belgische chocolade
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={bour} />
                                </div>
                                <div className="card-footer black-text">
                                    Roomijs bourbon vanille
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={kara} />
                                </div>
                                <div className="card-footer black-text">
                                    Roomijs karamel
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={malag} />
                                </div>
                                <div className="card-footer black-text">
                                    Roomijs malaga
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={amarena} />
                                </div>
                                <div className="card-footer black-text">
                                    Roomijs vanille amerena
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Roomijs;