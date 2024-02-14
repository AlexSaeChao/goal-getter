import React from 'react';

class Task extends React.Component {
  render() {
    const { task } = this.props;

    return <div className="task">{task.content}</div>;
  }
}

export default Task;

