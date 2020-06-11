import React, { Component } from 'react'
//import the components we will need
import TaskCard from './Tasks'
import TaskManager from '../../modules/TaskManager'

class TaskList extends Component {
    //define what this component needs to render
    state = {
        taskListInState: [],
    }
    componentDidMount() {
        console.log("Task list"); TaskManager.filterGetAll()
            .then((tasksFromApi) => {
                this.setState({
                    taskListInState: tasksFromApi
                })
            })
    }

    // im using an "if" statement to show the new task list after complete is checked
    PatchTask = id => {
        TaskManager.patch(id)
            .then(() => {
                TaskManager.getAll()
                    .then((newTasks) => {
                        this.setState({
                            taskListInState: newTasks
                        })
                    })
            })
    }

    render() {
        console.log("Render tasks list");

        return (
            <div className="container-cards">
                <h3>Here is where you will find an Itenerary on how to be my Grade "A" Bitch.</h3>
                <picture>

                </picture>

                <button id="new-task" onClick={() => { this.props.history.push("/tasks/new") }}>Add shit to do! </button>
                <h1>Better get to it, Trick.</h1>
                <article class="task-card">
                    <p> {this.state.taskListInState.map(singleTaskInLoop => {
                        if (singleTaskInLoop.complete === false) {
                            return <TaskCard taskProp={singleTaskInLoop} taskCheckbox={this.PatchTask} {...this.props} />
                        }
                    })}</p>
                </article>
            </div>
        )
    }
}

export default TaskList