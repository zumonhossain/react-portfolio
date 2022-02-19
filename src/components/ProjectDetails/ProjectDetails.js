import React, { Component, Fragment } from 'react';
import {Container,Row,Col, Button} from "react-bootstrap";
import projectDetails from '../../asset/image/projectDetails/project-1.jpg';

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from 'html-react-parser';

class ProjectDetails extends Component {


    constructor(props){
        super();
        this.state={
            MyProjectID:props.id,
            project_name:"",
            short_description:"",
            project_features:"",
            live_preview:"",
            image_one:"",
            image_two:"",
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectID).then(result=>{
            this.setState({
                project_name:result[0]['project_name'],
                short_description:result[0]['short_description'],
                project_features:result[0]['project_features'],
                live_preview:result[0]['live_preview'],
                image_two:result[0]['image_two'],
                })
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="projectDetailsImg" src={this.state.image_two} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">{this.state.project_name}</h2>
                                <p className="serviceText">{this.state.short_description}</p>

                                { parse(this.state.project_features) }

                                <Button target="_blank" href={""+this.state.live_preview} className="projectButton" variant="primary">Details</Button>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;