import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Analysis extends Component {


    constructor(){
        super();
        this.state={
            data:[ ]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({ data:result })
        })
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
                                        <XAxis dataKey="technology" />
                                        <Tooltip />
                                        <Bar dataKey="projects" fill="#4c9DED">
                                            
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