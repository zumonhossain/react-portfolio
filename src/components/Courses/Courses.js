import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import coursesOne from '../../asset/image/courses/courses-1.jpg';
import coursesTwo from '../../asset/image/courses/courses-2.jpg';
import {Link} from "react-router-dom";

import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Courses extends Component {

    constructor(){
        super();
        this.state={
            myData:[]
        }
        
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {

        const myList = this.state.myData

        const myView = myList.map(myList=>{

            return <Col lg={6}  md={12} sm={12} className="p-2">
                        <Row>
                            <Col lg={6}  md={6} sm={12}>
                                <img className="coursesImg" src={myList.small_img} />
                            </Col>
                            <Col lg={6}  md={6} sm={12} className="coursesJustufy">
                                <h5 className="coursesTitle">{myList.short_title}</h5>
                                <p className="coursesDes">{myList.short_des}</p>
                                <a className="coursesLink" href="#"><Link to="/courseDetails" className="allCoursDetailsLink">Details</Link></a>
                            </Col>
                        </Row>
                    </Col>

        })

        return (
            <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Our Courses</h1>
                        <Row>

                            {myView}

                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default Courses;