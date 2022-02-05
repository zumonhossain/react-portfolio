import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
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
                            <p className="serviceText">House No. 8/A/10 (Level-6), Road: #13, Dhanmondi, Dhaka, Bangladesh.</p>
                            <p className="serviceText"><FontAwesomeIcon icon={faEnvelope} /> zumonhossain10@gmail.com</p>
                            <p className="serviceText"><FontAwesomeIcon icon={faPhone} /> +880 1644 954 478</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;