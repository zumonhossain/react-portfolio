import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/> 
                <PageTop pagetitle="All Services" /> 
                <Services /> 
                <Contact /> 
                <Footer /> 
            </Fragment>
        );
    }
}

export default ServicePage;