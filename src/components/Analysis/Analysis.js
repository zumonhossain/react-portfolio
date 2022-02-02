import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";

class Analysis extends Component {


    constructor(){
        super();
        this.state={
            data:[
                {Technology:'HTML', Projects:100},
                {Technology:'Sql', Projects:80},
                {Technology:'Css', Projects:100},
                {Technology:'Bootstrap', Projects:90},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Laravel', Projects:90},
                {Technology:'Jquery', Projects:60},
            ]
        }
    }


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="Technology" />
                                        <Tooltip />
                                        <Bar dataKey="Projects" fill="#4c9DED">
                                            
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <p className="technology-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                <p className="technology-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                <p className="technology-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                <p className="technology-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;