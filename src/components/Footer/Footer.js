import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h2 className="serviceName">Flow Me</h2>
                                <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                                <a className="socialLink" href="#"><FontAwesomeIcon icon={faLinkedin} /> linkedin</a><br/>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h2 className="serviceName">Address</h2>
                                <p className="serviceText">House No. 8/A/10 (Level-6), Road: #13, Dhanmondi, Dhaka, Bangladesh.</p>
                                <p className="serviceText"><FontAwesomeIcon icon={faEnvelope} /> zumonhossain10@gmail.com</p>
                                <p className="serviceText"><FontAwesomeIcon icon={faPhone} /> +880 1644 954 478</p>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h2 className="serviceName">Information</h2>
                                <a className="footerLink" href="#">About Me</a><br/>
                                <a className="footerLink" href="#">My Resume</a><br/>
                                <a className="footerLink" href="#">Contact Me</a><br/>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h2 className="serviceName">Legal</h2>
                                <a className="footerLink" href="#">Refund Policy</a><br/>
                                <a className="footerLink" href="#">Terms And Condition</a><br/>
                                <a className="footerLink" href="#">Privacy Policy</a><br/>
                            </Col>
                        </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink">zumonhossain.com &copy; 2020</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;