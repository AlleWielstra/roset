import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import roset from './static/contact/deroset.png';
class About extends Component {
    render() {
        return (
            <div className="about-page">
                <Container>
                    <Row>
                        <Col><div className="card-about contact-title">
                            Over ons
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="card-about">
                                <div className="card-header">Klassiekers</div>
                                 Etiam eros enim, pharetra vel dolor luctus, imperdiet eleifend quam. Curabitur ultrices porttitor purus, sit amet semper quam varius vitae. Nullam dolor lectus, fermentum sit amet lorem vitae, blandit egestas dui. Vivamus congue feugiat sollicitudin. Suspendisse ac lorem id ante accumsan maximus non id tortor. Cras varius lacus nibh, non aliquet augue sodales sed. Maecenas dapibus congue euismod.
                            </div>
                        </Col>
                        <Col>
                            <div className="card-about">
                                <div className="card-header">Dagverse producten</div>
                                Proin fringilla turpis vel viverra feugiat. Integer ullamcorper lacus ut nibh venenatis fermentum. Etiam eros enim, pharetra vel dolor luctus, Sed gravida dapibus magna non laoreet. Maecenas imperdiet elementum nibh, eget facilisis diam accumsan sed. Cras posuere, libero sed dictum consequat, nunc sem fermentum augue, at pulvinar purus sem non velit. Aliquam ullamcorper tortor eu consectetur gravida. Aliquam aliquam maximus metus eu imperdiet. Vestibulum dictum id nulla ac mo
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="card-about">
                                <div className="card-header">Geschiedenis</div>
                                Proin fringilla turpis vel viverra feugiat. Integer ullamcorper lacus ut nibh venenatis fermentum. Etiam eros enim, pharetra vel dolor luctus, Sed gravida dapibus magna non laoreet. Maecenas imperdiet elementum nibh, eget facilisis diam accumsan sed. Cras posuere, libero sed dictum consequat, nunc sem fermentum augue, at pulvinar purus sem non velit. Aliquam ullamcorper tortor eu consectetur gravida. Aliquam aliquam maximus metus eu imperdiet. Vestibulum dictum id nulla ac mo
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="card-about">
                                <div className="card-header">Vanille en pistache</div>
                                Proin fringilla turpis vel viverra feugiat. Integer ullamcorper lacus ut nibh venenatis fermentum. Etiam eros enim, pharetra vel dolor luctus, Sed gravida dapibus magna non laoreet. Maecenas imperdiet elementum nibh, eget facilisis diam accumsan sed. Cras posuere, libero sed dictum consequat, nunc sem fermentum augue, at pulvinar purus sem non velit. Aliquam ullamcorper tortor eu consectetur gravida. Aliquam aliquam maximus metus eu imperdiet. Vestibulum dictum id nulla ac mo
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;