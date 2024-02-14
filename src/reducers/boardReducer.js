const initialState = {
  boards: {
    'board-1': {
      id: 'board-1',
      title: 'Goals',
      lists: ['list-1', 'list-2'],
    },

  },
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To Do',
      tasks: ['task-1', 'task-2'],
    },

  },
  tasks: {

    'task-1': {
      id: 'task-1',
      content: 'Complete project proposal',
      dueDate: '2024-02-28',
    },
  },

};


// Action Types
const ADD_BOARD = 'ADD_BOARD';
const UPDATE_BOARD = 'UPDATE_BOARD';
const DELETE_BOARD = 'DELETE_BOARD';

// Action Creators
export const addBoard = (board) => ({
  type: ADD_BOARD,
  payload: board,
});

export const updateBoard = (boardId, updates) => ({
  type: UPDATE_BOARD,
  payload: { boardId, updates },
});

export const deleteBoard = (boardId) => ({
  type: DELETE_BOARD,
  payload: boardId,
});

// Reducer
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.id]: action.payload,
        },
      };
    case UPDATE_BOARD:
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.boardId]: {
            ...state.boards[action.payload.boardId],
            ...action.payload.updates,
          },
        },
      };
    case DELETE_BOARD:
      const { [action.payload]: deletedBoard, ...updatedBoards } = state.boards;
      return {
        ...state,
        boards: updatedBoards,
      };
    default:
      return state;
  }
};

export default boardReducer;
