const initialData = {
  boards: {
    'board-1': {
      id: 'board-1',
      title: 'My Board',
      listIds: ['list-1'],
    },
  },
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columnOrder: ['list-1'],
};

export default initialData;

