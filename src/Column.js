import React from "react";

export default class Column extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.column.title}</h3>
        {this.props.tasks.map((task) => (
          <div key={task.id}>{task.content}</div>
        ))}
      </div>
    );
  }
}