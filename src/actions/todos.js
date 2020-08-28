import * as constants from './constants';
import { v4 } from 'uuid';

export const addTodo = text => {
  return {
    type:  constants.ADD_TODO,
    id: v4(),
    text
  };
};

export const addSublist = text => {
  return {
    type:  constants.ADD_SUBLIST,
    id: v4(),

  };
};

export const toggleTodo = id => {
  return {
    type: constants.TOGGLE_TODO,
    id
  };
};

export const deleteTodo = id => {
  return {
    type: constants.DELETE_TODO,
    id
  }
}

export const sublistTodo = id => {
  return {
    type: constants.SUBLIST_TODO,
    id,
  }
}