import React from 'react';
import AddSubList from "./AddSubList";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = ({ text, completed, sublist, onToggleClick, onDeleteClick, onSublist }) => {
  return (
    <li data-test='component-todo'
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
        <button onClick={onToggleClick}  > Completed </button>
        <button onClick={onDeleteClick}>X</button>
        <span>{text}</span>

    </li>
  )
}

export default Todo;