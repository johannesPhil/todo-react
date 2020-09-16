import React, { Component } from "react"

import Task from "./Task"
import "./task.css"

class TaskList extends Component {
  render() {
    return this.props.tasks.length === 0 ? (
      <div className="altTextWrapper">
        <div className="altText">
          <p>Start by Adding a Task above</p>
          <p className="altText__plus">&#43;</p>
        </div>
      </div>
    ) : (
      // <div className="taskswrapper">
      this.props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          completeTask={this.props.completeTask}
          removeTask={this.props.removeTask}
        ></Task>
        // </div>
      ))
    )
  }
}

export default TaskList
