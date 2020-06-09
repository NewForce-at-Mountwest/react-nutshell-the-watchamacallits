import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home";
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";


class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />;
                }}
                />
                <Route exact path="/news" render={(props) => {
                    return <NewsList {...props} />;
                }}
                />
                <Route exact path="/news/new" render={(props) => {
                    return <NewsForm {...props}/>;
                }}
                />
            </>
        )
    }
}



export default ApplicationViews;