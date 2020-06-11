import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home";
import EventEditForm from './events/EventEditForm'
import EventList from "./events/EventList"
import EventForm from './events/EventForm'


class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />;
                }}
                />

                <Route exact path="/events"
                    render={(props) => {
                        return <EventList {...props} />
                    }} />

                <Route path="/events/new" render={(props) => {
                    return <EventForm {...props} />
                }} />

                <Route
                exact path="/events/:eventId(\d+)/edit"
                    render={props => {
                        return <EventEditForm {...props} />
                    }}
                />
            </>
        )
    }
}



export default ApplicationViews;