import React, { Component } from "react"
import TaskManager from "../../modules/TaskManager"
import "./TaskForm.css"

class TaskEditForm extends Component {
    //set the initial state

    state = {
        taskName: "",
        completedDate: "",
        complete: false,
        loadingStatus: false,
        userId: 1
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleKeyPress = evt => {
        if (evt.key === 'Enter') {
            console.log("enetr key worked")

            evt.preventDefault()
            this.setState({ loadingStatus: true });
            const editedTask = {
                id: this.props.match.params.taskId,
                taskName: this.state.taskName,
                completedDate: this.state.completedDate,
                complete: this.state.complete,
                userId: 1

            };
            TaskManager.update(editedTask)
                .then(() => this.props.history.push("/tasks"))
        }

    }





    componentDidMount() {
        TaskManager.get(this.props.match.params.taskId)
            .then(tasks => {
                this.setState({
                    taskName: tasks.taskName,
                    completedDate: tasks.completedDate,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                onKeyDown={this.handleKeyPress}
                                id="taskName"
                                value={this.state.taskName}
                            />
                            <label htmlFor="taskName">Name of task</label>


                        </div>

                    </fieldset>
                </form>
            </>
        );
    }
}

export default TaskEditForm