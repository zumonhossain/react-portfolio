import React, { Component, Fragment } from 'react';
import {Container,Row,Col, Modal, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {


    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})



    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="videoCard">
                                    <p className="videoTitle">How I Do</p>
                                    <p className="videoDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                    <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                                </div>
                            </Col>
                        </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center"/>
                            </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;