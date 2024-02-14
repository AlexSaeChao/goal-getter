import React from 'react';
import List from './List';

class Board extends React.Component {
  render() {
    const { board, lists, tasks } = this.props;

    return (
      <div className="board">
        <h2>{board.title}</h2>
        <div className="lists">
          {lists.map((list) => (
            <List key={list.id} list={list} tasks={tasks} /> // Pass tasks prop here
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
