import * as constants from '../actions/constants';

const Todo = (state, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
        sublist: false
      };
    case constants.ADD_SUBLIST:
      if (state.id === action.id){
        return {
          ...state,
          sublist: !state.sublist
        }
      }return state;

    case constants.TOGGLE_TODO:
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        };
      }

      return state;
    default:
      return state;
  }
}

const Todos = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state, 
        Todo(undefined, action)
      ];
    case constants.TOGGLE_TODO:
      return state.map(t => Todo(t, action));
    case constants.DELETE_TODO:
      return state.filter(todo => { return todo.id !== action.id });
    default:
      return state;
  }
}

export default Todos;