import React, { Component, Fragment } from 'react';
import {Route, Switch} from "react-router-dom";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/course" component={CoursePage} />
                    <Route exact path="/Portfolio" component={ProjectPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;