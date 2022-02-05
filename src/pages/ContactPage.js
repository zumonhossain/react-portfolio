import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/> 
                <PageTop pagetitle="Contact Us" /> 
                <Contact /> 
                <Footer /> 
            </Fragment>
        );
    }
}

export default ContactPage;