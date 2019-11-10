import React from 'react';
import './App.css';
import Users from './components/Users';
import Todos from './components/Todos';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  const result = preparedTodos.map(todo => (
    <div key={todo.id + new Date()}>
      <Users user={todo.user} />
      <Todos item={todo} />
    </div>
  ));
  return (
    <div className="App">
      { result }
    </div>
  );
}

export default App;
