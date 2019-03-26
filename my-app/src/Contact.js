import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import roset from './static/contact/deroset.png';
class Contact extends Component {
    render() {
        document.title = 'Roset - Contact';
        return (
            <div className="contact-page">
                <Container>
                    <Row>
                        <Col><div className="contact-container contact-title">Contact</div></Col>
                    </Row>
                    <Row className="row-eq-height">
                        <Col sm="12" md="8"><div className="contact-container"><img className="elip responsive-img" alt="foto van de roset" src={roset} /></div></Col>
                        <Col sm="12" md="4">
                            <div className="contact-container">
                            <table>
                                <thead>
                                    <tr className='tablehead'>
                                        <th>Dag</th>
                                        <th>Openingstijden</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Maandag</td>
                                        <td>9:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Dinsdag</td>
                                        <td>8:30 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Woensdag</td>
                                        <td>8:30 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Donderdag</td>
                                        <td>8:30 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Vrijdag</td>
                                        <td>8:30 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Zaterdag</td>
                                        <td>8:00 - 22:00 *</td>
                                    </tr>
                                    <tr>
                                        <td>Zondag</td>
                                        <td>12:00 - 22:00 **</td>
                                    </tr>
                                </tbody>
                            </table>
                                * Heerhugowaard geopend tot 24:00<br/>
                                ** Castricum geopend tot 23:00
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="contact-container">
                                Burgemeester Mooijstraat 17<br/>
                                1901 EP, Castricum<br/>
                                T 0251 - 652 386<br/>
                                info@deroset.nl
                            </div>
                        </Col>
                        <Col>
                            <div className="contact-container">
                                Geesterduinweg 39<br/>
                                1902 EJ, Castricum<br/>
                                T 0251 - 654683<br/>
                                info@deroset.nl
                            </div>
                        </Col>
                        <Col>
                            <div className="contact-container">
                                Middenwaard 44<br/>
                                1703 SH, Heerhugowaard<br/>
                                T 072 - 7370105<br/>
                                info@deroset.nl
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;