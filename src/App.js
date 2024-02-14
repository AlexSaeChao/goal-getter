import React from 'react';
import initialData from './initialData';
import Board from './Board';

class App extends React.Component {
  state = initialData;

  render() {
    const boardIds = Object.keys(this.state.boards);
    return boardIds.map((boardId) => {
      const board = this.state.boards[boardId];
      const lists = board.listIds.map((listId) => this.state.lists[listId]);
      const tasks = Object.values(this.state.tasks);

      return <Board key={board.id} board={board} lists={lists} tasks={tasks} />;
    });
  }
}



export default App;
