import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";

class Analysis extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <p className="technology-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                <p className="technology-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                <p className="technology-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;