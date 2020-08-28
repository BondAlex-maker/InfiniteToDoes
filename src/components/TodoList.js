import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import AddTodo from "./AddTodo";
import {sublistTodo} from "../actions/todos";

const TodoList = ({ todos, onToggleClick, onDeleteClick, onSublist }) => {

  return (
    <div data-test="component-todolist">
      <ul>
      {todos.map((todo) => {
        return <Todo
                  key={todo.id}
                  text={todo.text} 
                  completed={todo.completed}
                  sublist = {todo.sublist}
                  onToggleClick={() => onToggleClick(todo.id)}
                  onDeleteClick={() => onDeleteClick(todo.id)}
                  onSublist={() => onSublist(todo.id)}
        > </Todo>
      })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onSListClick: PropTypes.func.isRequired,
};

export default TodoList;