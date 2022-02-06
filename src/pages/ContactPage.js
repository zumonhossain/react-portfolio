import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact" /> 
                <PageTop pagetitle="Contact Us" /> 
                <Contact /> 
                <Footer /> 
            </Fragment>
        );
    }
}

export default ContactPage;