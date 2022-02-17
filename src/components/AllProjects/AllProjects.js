import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import projectOne from '../../asset/image/project/project-1.jpg';
import projectTwo from '../../asset/image/project/project-2.jpg';
import projectThree from '../../asset/image/project/project-3.jpg';
import {Link} from "react-router-dom";

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";


class AllProjects extends Component {

    constructor(){
        super();
        this.state={
            myData:[]
        }
        
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectAll).then(result=>{
            this.setState({myData:result})
        })
    }


    render() {

        const myList = this.state.myData

        const myView = myList.map(myList=>{

            return <Col lg={4}  md={6} sm={12} className="p-2">
                        <Card className="projectCard">
                            <Card.Img className="projectImg" variant="top" src={myList.image_one} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                                <Card.Text className="projectCardDes">{myList.short_description}</Card.Text>
                                <Button className="projectButton" variant="primary"><Link to={"/ProjectDetails/"+myList.id+"/"+myList.project_name} className="linkStyle">Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>

        })

        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>

                        {myView}

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;