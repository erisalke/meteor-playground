import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task.jsx';
import { Tasks } from '../api/tasks.js';


class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    const text = findDOMNode(this.refs.textInput).value.trim();
 
    Tasks.insert({
      text,
      createdAt: new Date(),
    });
 
    findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          <form className="new-task" onSubmit={(ev) => this.handleSubmit(ev)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
  };
})(App);