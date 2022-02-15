import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Footer extends Component {

    constructor(){
        super();
        this.state={
            address:"",
            email:"",
            phone:"",
            facebook:"",
            youtube:"",
            footer_credit:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                facebook:result[0]['facebook'],
                youtube:result[0]['youtube'],
                footer_credit:result[0]['footer_credit'],
                
                })
        })
    }

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
                                <p className="serviceText"> { this.state.address } </p>
                                <p className="serviceText"><FontAwesomeIcon icon={faEnvelope} /> { this.state.email } </p>
                                <p className="serviceText"><FontAwesomeIcon icon={faPhone} /> { this.state.phone } </p>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h2 className="serviceName">Information</h2>
                                <Link className="footerLink" to="/about">About Me</Link><br/>
                                <Link className="footerLink" to="/contact">Contact Me</Link><br/>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h2 className="serviceName">Legal</h2>
                                <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                                <Link className="footerLink" to="/terms">Terms And Condition</Link><br/>
                                <Link className="footerLink" to="/privacy">Privacy Policy</Link><br/>
                            </Col>
                        </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink"> { this.state.footer_credit } </a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;