import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/> 
                <PageTop pagetitle="About Me" /> 
                <AboutDescription /> 
                <Footer /> 
            </Fragment>
        );
    }
}

export default AboutPage;