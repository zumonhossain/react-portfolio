import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Contact extends Component {

    constructor(){
        super();
        this.state={
            address:"",
            email:"",
            phone:"",
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                
                })
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Quick Connect</h2>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceText">Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceText">Email Address</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceText">Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Discuss Now</h2>
                            <p className="serviceText"> { this.state.address } </p>
                            <p className="serviceText"><FontAwesomeIcon icon={faEnvelope} /> { this.state.email } </p>
                            <p className="serviceText"><FontAwesomeIcon icon={faPhone} /> { this.state.phone } </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;