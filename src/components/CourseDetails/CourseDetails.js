import React, { Component, Fragment } from 'react';
import {Container,Row,Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topCourseFixedDetails p-0">
                    <div className="topCouseDetailsOverlay">
                        <Container className="topCourseDetailsContent">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <h3 className="text-white">Full Daynamic website and Admin Panel</h3>
                                        <h5 className="text-white">Full Daynamic website</h5>
                                        <h5 className="text-white">Full Daynamic website</h5>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <p className="coursesDes text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                    </Col>
                                </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="cardTitle">Card Title</h5>
                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Full Daynamic website and Admin Panel</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Full Daynamic website and Admin Panel</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Full Daynamic website and Admin Panel</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Full Daynamic website and Admin Panel</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Full Daynamic website and Admin Panel</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="iconCircleColor" icon={faCheckCircle} /> Full Daynamic website and Admin Panel</p>
                            <Button className="projectButton" variant="primary">Details</Button>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;