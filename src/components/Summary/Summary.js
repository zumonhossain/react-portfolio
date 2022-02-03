import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

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
                                                    <h1 className="countNumber">
                                                        <CountUp start={0} end={300}>
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor onChange={start} delayedCall>
                                                                    <span ref={countUpRef}/>
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                    </h1>
                                                    <h4 className="countTitle">Total Projects</h4>
                                                </Col>
                                                <Col>
                                                    <h1 className="countNumber">
                                                        <CountUp start={0} end={650}>
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor onChange={start} delayedCall>
                                                                    <span ref={countUpRef}/>
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                    </h1>
                                                    <h4 className="countTitle">Total Client</h4>
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