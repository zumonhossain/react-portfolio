import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AllProjects from "../components/AllProjects/AllProjects";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

class ProjectsPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio" /> 
                <PageTop pagetitle="All Projects" /> 
                <AllProjects /> 
                <Footer /> 
            </Fragment>
        );
    }
}

export default ProjectsPage;