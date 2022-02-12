import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import grapichLogo from '../../asset/image/services/grapichLogo.png'
import webLogo from '../../asset/image/services/webLogo.png'
import mobileLogo from '../../asset/image/services/mobileLogo.png'

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Services extends Component {

    constructor(){
        super();
        this.state={
            myData:[]
        }
        
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Services).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {

        const myList = this.state.myData

        const myView = myList.map(myList=>{

            return <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img className="serviceImg" src={myList.service_logo} />
                            <h2 className="serviceName">{myList.service_name}</h2>
                            <p className="serviceText">{myList.service_description}</p>
                        </div>
                    </Col>

        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">My Services</h1>
                        <Row>

                            {myView}

                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;