import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import aardbei from "./static/ijsimages/sorbetijs/Sorbetijs_Aardbei.jpg"
import citroen from "./static/ijsimages/sorbetijs/Sorbetijs_Citroen_Limoen.jpg"
import framboos from "./static/ijsimages/sorbetijs/Sorbetijs_Framboos.jpg"
import mango from "./static/ijsimages/sorbetijs/Sorbetijs_Mango.jpg"
import meloen from "./static/ijsimages/sorbetijs/Sorbetijs_Meloen.jpg"
import passie from "./static/ijsimages/sorbetijs/Sorbetijs_Passie_Mango.jpg"

class Sorbetijs extends Component {
    render() {
        return (
            <div className="sorbetijs-page">
                <Container>
                    <Row>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={aardbei} />
                                </div>
                                <div className="card-footer black-text">
                                    Sorbetijs aardbei
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={citroen} />
                                </div>
                                <div className="card-footer black-text">
                                    Sorbetijs citroen limoen
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={framboos} />
                                </div>
                                <div className="card-footer black-text">
                                    Sorbetijs framboos
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={mango} />
                                </div>
                                <div className="card-footer black-text">
                                    Sorbetijs mango
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={meloen} />
                                </div>
                                <div className="card-footer black-text">
                                    Sorbetijs meloen
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-content">
                                    <img className="responsive-img" src={passie} />
                                </div>
                                <div className="card-footer black-text">
                                    Sorbetijs passie mango
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Sorbetijs;