export const reducer = (state, { type, payload }) => {
  // (state, dispatch)
  switch (type) {
    case 'GET_TASK':
      return {
        ...state,
        tasks: payload,
      };
    case 'ON_CHANGE_INPUT':
      return {
        ...state,
        name: payload,
      };
    case 'ON_CHANGE_SELECT':
      return {
        ...state,
        status: payload,
      };
    case 'ON_ADD_SUBMIT':
      const newTask = {
        id: Date.now() + Math.random(),
        name: state.name,
        status: state.status,
      };
      localStorage.setItem('tasks', JSON.stringify([...state.tasks, newTask]));
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case 'ON_DELETE':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload),
      };
    case 'ON_UPDATE_STATUS':
    const newStatus = state.tasks.map(task =>
      task.id === payload ? { ...task, status: !task.status } : task);

      localStorage.setItem('tasks', JSON.stringify([...state.tasks]));
      
      return {
        ...state,
        tasks: newStatus,
      };
    
    default:
      return state;
  }
};
