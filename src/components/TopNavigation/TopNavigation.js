import React, { Component,Fragment } from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";
import whiteLogo from '../../asset/image/logo/navLogo.png'
import blueLogo from '../../asset/image/logo/navlogoScroll.png'
import '../../asset/css/custom.css'
import '../../asset/css/responsive.css'
import '../../asset/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {


    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            navVariant:'dark',
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll', navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle', navBarLogo:[whiteLogo], navBarBack:'navBackground', navBarItem:'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img className="navLogoImg" src={this.state.navBarLogo} /> Zumon Hossain</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">Home</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">About</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">Services</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">Courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">Contact</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;