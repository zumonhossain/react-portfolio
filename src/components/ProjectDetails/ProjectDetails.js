import React, { Component, Fragment } from 'react';
import {Container,Row,Col, Button} from "react-bootstrap";
import projectDetails from '../../asset/image/projectDetails/project-1.jpg';

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="projectDetailsImg" src={projectDetails} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">Discuss Now</h2>
                                <p className="serviceText">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                <ul>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                    <li className="serviceText">Lorem Ipsum is simply dummy text of the printing</li>
                                </ul>
                                <Button className="projectButton" variant="primary">Details</Button>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;