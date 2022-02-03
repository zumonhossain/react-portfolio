import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import coursesOne from '../../asset/image/courses/courses-1.jpg';
import coursesTwo from '../../asset/image/courses/courses-2.jpg';


class Courses extends Component {
    render() {
        return (
            <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Our Courses</h1>
                        <Row>
                            <Col lg={6}  md={12} sm={12}>
                                <Row>
                                    <Col lg={6}  md={6} sm={12}>
                                        <img className="coursesImg" src={coursesOne} />
                                    </Col>
                                    <Col lg={6}  md={6} sm={12} className="coursesJustufy">
                                        <h5 className="coursesTitle">Web Development</h5>
                                        <p className="coursesDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                        <a className="coursesLink" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}  md={12} sm={12}>
                                <Row>
                                    <Col lg={6}  md={6} sm={12}>
                                        <img className="coursesImg" src={coursesTwo} />
                                    </Col>
                                    <Col lg={6}  md={6} sm={12} className="coursesJustufy">
                                        <h5 className="coursesTitle">Web Design</h5>
                                        <p className="coursesDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                        <a className="coursesLink" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}  md={12} sm={12} className="mt-3">
                                <Row>
                                    <Col lg={6}  md={6} sm={12}>
                                        <img className="coursesImg" src={coursesTwo} />
                                    </Col>
                                    <Col lg={6}  md={6} sm={12} className="coursesJustufy">
                                        <h5 className="coursesTitle">React Js</h5>
                                        <p className="coursesDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                        <a className="coursesLink" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}  md={12} sm={12} className="mt-3">
                                <Row>
                                    <Col lg={6}  md={6} sm={12}>
                                        <img className="coursesImg" src={coursesOne} />
                                    </Col>
                                    <Col lg={6}  md={6} sm={12} className="coursesJustufy">
                                        <h5 className="coursesTitle">PHP Laravel</h5>
                                        <p className="coursesDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                        <a className="coursesLink" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default Courses;