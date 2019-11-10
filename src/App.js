import React from 'react';
import './App.css';
import Users  from './components/Users';
import Todos  from './components/Todos';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  console.log(preparedTodos)
  const result = preparedTodos.map(todo => (
    <div className="App">
      <Users user={todo.user} />
      <Todos todo={todo} />
    </div>
  ))
  return (
    { result }
  );
}

export default App;
