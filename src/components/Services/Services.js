import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import grapichLogo from '../../asset/image/services/grapichLogo.png'
import webLogo from '../../asset/image/services/webLogo.png'
import mobileLogo from '../../asset/image/services/mobileLogo.png'
class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">My Services</h1>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="serviceImg" src={grapichLogo} />
                                    <h2 className="serviceName">Grapich Development</h2>
                                    <p className="serviceText">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="serviceImg" src={webLogo} />
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceText">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="serviceImg" src={mobileLogo} />
                                    <h2 className="serviceName">Mobile Development</h2>
                                    <p className="serviceText">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;