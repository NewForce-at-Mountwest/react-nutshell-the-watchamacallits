import React, { Component } from 'react';
import './Tasks.css'

class TaskCard extends Component {
  render() {
    return (
      <div className="task-card">
        <div className="task-card-content">

          <h2 ><u>Task </u></h2>
          <a className="task-response"  onClick={() => { this.props.history.push(`/tasks/${this.props.taskProp.id}/edit`) }}>{this.props.taskProp.taskName}</a>
          <h2><u>You done, bitch?</u></h2>
          <input id="task-complete" type="checkbox" onChange={() => this.props.taskCheckbox(this.props.taskProp.id)}></input>
          <label htmlFor="task-complete" class="task-response">Yes!</label>
          <p className="task-response">{this.props.taskProp.complete}</p>
          <h2><u>When are you gonna' finish that shit?</u></h2>
          <p className="task-response">{this.props.taskProp.completedDate}</p>
          







        </div>
      </div>
    );
  }
}

export default TaskCard;