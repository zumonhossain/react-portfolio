import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                    <Container fluid={true} className="summaryBanner summarySectionMargin p-0">
                        <div className="summaryBannerOverlay">
                            <Container className="text-center">
                                    <Row>
                                        <Col lg={8} md={6} sm={12} className="countSection">
                                            <Row>
                                                <Col>
                                                    <h1 className="countNumber">100</h1>
                                                    <h4 className="countTitle">Total Projects</h4>
                                                </Col>
                                                <Col>
                                                    <h1 className="countNumber">100</h1>
                                                    <h4 className="countTitle">Total Projects</h4>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={4} md={6} sm={12}>
                                            <Card className="workCard">
                                                <Card.Body>
                                                    <Card.Title className="cardTitle">Card Title</Card.Title>
                                                    <Card.Text>
                                                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Requirement Gathering</p>
                                                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> System Analysis</p>
                                                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Coding Testing</p>
                                                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Implementation</p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                            </Container>
                        </div>
                    </Container>
            </Fragment>
        );
    }
}

export default Summary;