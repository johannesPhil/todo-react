import React, { Component } from "react"

import "./task.css"

class Task extends Component {
  complete = () => {
    return {
      textDecoration: this.props.task.completed ? "line-through" : "none",
    }
  }

  render() {
    const { id, title } = this.props.task
    // console.log(this.props)
    return (
      <div className="task">
        <input
          name="task"
          type="checkbox"
          className="task__check"
          onChange={this.props.completeTask.bind(this, id)}
        />
        <label htmlFor="task" className="task__title" style={this.complete()}>
          {title}
        </label>
        <button
          className="task__delete"
          onClick={this.props.removeTask.bind(this, id)}
        >
          &#10005;
        </button>
      </div>
    )
  }
}

export default Task
