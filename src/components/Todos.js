import React from 'react';
import todosData from './todosData';
import TodoItem from './TodoItem';

function Todos() {
  const todosItems = todosData.map(item => <TodoItem key={item.id} item={item} /> )

  return (
    <div>
      <h1>Todos list</h1>
      <todosData />
      <todosData />
    </div>
  );
}

export default Todos;
