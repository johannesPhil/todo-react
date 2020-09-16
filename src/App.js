import React, { Component } from "react"

import Header from "./layout/Header"
import AddTask from "./components/AddTask"
import TaskList from "./components/tasks/TaskList"

import "./App.css"

class App extends Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    if (localStorage.getItem("tasks") !== null) {
      this.setState(
        { tasks: JSON.parse(localStorage.getItem("tasks")) },

        () => {}
      )
    }
  }

  // getTasks = () => {
  //   if (localStorage.getItem("tasks") === null) {
  //     var storedTasks = []
  //   } else {
  //     storedTasks = JSON.parse(localStorage.getItem("tasks"))
  //   }

  //   return storedTasks
  // }

  addTask = (title) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title,
      completed: false,
    }

    if (localStorage.getItem("tasks") === null) {
      var storedTasks = []

      storedTasks.push(newTask)

      localStorage.setItem("tasks", JSON.stringify(storedTasks))
    } else {
      storedTasks = JSON.parse(localStorage.getItem("tasks"))

      storedTasks.push(newTask)

      localStorage.setItem("tasks", JSON.stringify(storedTasks))
    }

    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks")),
    })
  }

  completeTask = (id) => {
    this.setState(
      {
        tasks: this.state.tasks.map((task) => {
          if (task.id === id) {
            task.completed = !task.completed
          }
          return task
        }),
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
      }
    )
  }

  removeTask = (id) => {
    this.setState(
      {
        tasks: this.state.tasks.filter((task) => {
          return task.id !== id
        }),
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="container">
            <div className="top">
              <Header />
              <AddTask addTask={this.addTask} />
            </div>
            <TaskList
              tasks={this.state.tasks}
              completeTask={this.completeTask}
              removeTask={this.removeTask}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
