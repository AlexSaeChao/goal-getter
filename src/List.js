import React from 'react';
import Task from './Task';

class List extends React.Component {
  render() {
    const { list, tasks } = this.props;

    console.log('list.taskIds:', list.taskIds);
    console.log('this.props.tasks:', this.props.tasks);

    return (
      <div className="list">
        <h3>{list.title}</h3>
        <div className="tasks">
          {list && list.taskIds && list.taskIds.map((taskId) => {
            console.log('taskId:', taskId);
            const task = tasks.find(task => task.id === taskId); // Find task by id
            console.log('task:', task);
            
            return <Task key={taskId} task={task} />;
          })}
        </div>
      </div>
    );
  }
}

export default List;
