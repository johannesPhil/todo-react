import React, { Component } from "react"

import "./AddTasks.css"

export default class AddTask extends Component {
  state = {
    title: "",
    error: "",
  }

  handleError = () => {
    return {
      opacity: this.state.error === "" ? 0 : 1,
      transition: "ease-in 300ms",
      color: "#fff",
      margin: ".5em 0",
    }
  }

  titleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addTask = (e) => {
    e.preventDefault()
    this.state.title === ""
      ? this.setState({ error: "Sorry, but you can't add an empty task" })
      : this.props.addTask(this.state.title)
    this.setState({ title: "" })
  }

  render() {
    return (
      <div>
        <form className="add__form" onSubmit={this.addTask}>
          <div className="add__div">
            <input
              type="text"
              name="title"
              placeholder="Add Task..."
              className="add__input"
              value={this.state.title}
              onChange={this.titleChange}
            />
            <button type="submit" value="" className="add__btn">
              &#43;
            </button>
          </div>
        </form>
        <p style={this.handleError()}>{this.state.error}</p>
      </div>
    )
  }
}
