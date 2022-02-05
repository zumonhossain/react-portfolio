import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import projectOne from '../../asset/image/project/project-1.jpg';
import projectTwo from '../../asset/image/project/project-2.jpg';
import projectThree from '../../asset/image/project/project-3.jpg';

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Recent Project</h1>
                        <Row>
                            <Col lg={4}  md={6} sm={12} className="p-2">
                                <Card className="projectCard">
                                    <Card.Img className="projectImg" variant="top" src={projectOne} />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Creative Design</Card.Title>
                                        <Card.Text className="projectCardDes">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                        </Card.Text>
                                        <Button className="projectButton" variant="primary">Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}  md={6} sm={12} className="p-2">
                                <Card className="projectCard">
                                    <Card.Img className="projectImg" variant="top" src={projectTwo} />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Creative Design</Card.Title>
                                        <Card.Text className="projectCardDes">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                        </Card.Text>
                                        <Button className="projectButton" variant="primary">Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}  md={6} sm={12} className="p-2">
                                <Card className="projectCard">
                                    <Card.Img className="projectImg" variant="top" src={projectThree} />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Creative Design</Card.Title>
                                        <Card.Text className="projectCardDes">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                        </Card.Text>
                                        <Button className="projectButton" variant="primary">Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;