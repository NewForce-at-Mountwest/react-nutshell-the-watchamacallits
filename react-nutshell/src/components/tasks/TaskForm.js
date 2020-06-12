import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';
import './TaskForm.css'

class TaskForm extends Component {
    state = {
        taskName: "",
        completedDate: "",
        complete: false,
        loadingStatus: false,
        userId: null
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create  object, invoke the taskManager post method, and redirect to the full task list
    */
    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.taskName === "" || this.state.completedDate === "") {
            window.alert("Hey slut, whats the task and when should it be done?");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                taskName: this.state.taskName,
                completedDate: this.state.completedDate,
                complete: this.state.complete,
                userId: JSON.parse(localStorage.getItem("credentials")).userId
            };

            // Create the task and redirect user to task list
            TaskManager.post(task)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="taskName"
                        placeholder="Name of task"
                        />
                        <label htmlFor="taskName">Task Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="completedDate"
                        placeholder="Due Date"
                        />
                        <label htmlFor="completedDate">Due Date</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTask}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TaskForm