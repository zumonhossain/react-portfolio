import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";

class topBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                        <div className="topBannerOverlay">
                            <Container className="topContent">
                                    <Row>
                                        <Col className="text-center">
                                            <h1 className="topTitle">ZUMON HOSSAIN</h1>
                                            <h4 className="topSubTitle">Web Design and Web Developer</h4>
                                            <Button className="projectButton" variant="primary">More Info</Button>
                                        </Col>
                                    </Row>
                            </Container>
                        </div>
                </Container>
            </Fragment>
        );
    }
}

export default topBanner;