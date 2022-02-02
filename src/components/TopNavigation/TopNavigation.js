import React, { Component,Fragment } from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";
import whiteLogo from '../../asset/image/logo/navLogo.png'
import blueLogo from '../../asset/image/logo/navlogoScroll.png'

class TopNavigation extends Component {


    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo]
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll', navBarLogo:[blueLogo]})
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', navBarLogo:[whiteLogo]})
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}><img className="navLogoImg" src={this.state.navBarLogo} /> Zumon Hossain</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Home</Nav.Link>
                                <Nav.Link href="#deets">Services</Nav.Link>
                                <Nav.Link href="#deets">Courses</Nav.Link>
                                <Nav.Link href="#deets">Portfolio</Nav.Link>
                                <Nav.Link href="#deets">Contact</Nav.Link>
                                <Nav.Link href="#deets">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;