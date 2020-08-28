import React from 'react';
import AddSubList from "./AddSubList";
import AddTodo from "./AddTodo";


const Todo = ({ text, completed, onToggleClick, onDeleteClick, onSListClick }) => {
  return (
    <li data-test='component-todo'
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
        <button onClick={onToggleClick}  > Completed </button>
        <button onClick={onDeleteClick}>X</button>
        <button onClick={onSListClick}>SList</button>
        <span>{text}</span>
        <AddTodo/>
    </li>
  )
}

export default Todo;