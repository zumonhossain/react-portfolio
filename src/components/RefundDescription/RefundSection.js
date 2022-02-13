import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import parse from 'html-react-parser';

class RefundSection extends Component {

    constructor(){
        super();
        this.state={
            desc:"..."
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({ desc:result[0]['refund'] })
        })
    }


    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                        <Row>
                            <Col lg={12} md={12} sm={12}>

                                { parse(this.state.desc) }
                                
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundSection;