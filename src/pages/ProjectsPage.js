import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AllProjects from "../components/AllProjects/AllProjects";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

class ProjectsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/> 
                <PageTop pagetitle="All Projects" /> 
                <AllProjects /> 
                <Footer /> 
            </Fragment>
        );
    }
}

export default ProjectsPage;