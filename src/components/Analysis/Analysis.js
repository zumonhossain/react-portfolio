import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from 'html-react-parser';

class Analysis extends Component {


    constructor(){
        super();
        this.state={
            data:[ ],
            desc:"..."
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({ data:result })
        })

        RestClient.GetRequest(AppUrl.TechDesc).then(result=>{
            this.setState({ desc:result[0]['tech_description'] })
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
                                <p className="technology-details"> { parse(this.state.desc) } </p>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;