import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home";
import TaskList from './tasks/TaskList'
import TaskForm from './tasks/TaskForm'
import TaskEditForm from "./tasks/TaskEditForm";

class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />;
                }}
                />

                <Route exact path="/tasks" render={(props) => {
                    return <TaskList {...props} />
                }} />

                <Route exact path="/tasks/new" render={(props) => {
                    return <TaskForm {...props} />
                }} />

                <Route
                    path="/tasks/:taskId(\d+)/edit" render={props => {
                        return <TaskEditForm {...props} />
                    }}
                />
            </>
        )
    }
}



export default ApplicationViews;