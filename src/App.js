import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {

  const allTodos =
    todos.map((item, index) => (
      {
        id: item.id,
        userId: item.userId,
        title: item.title,
        completed: item.completed,
        users: users.find(user => user.id === item.userId)
      }
    ))
  console.log(allTodos);
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>

      {allTodos.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i}>
          <div>
            title
            {item.users.name}
          </div>
        <div>
          title
          {item.title}
        </div>
      {item.completed ?
        <input type="checkbox" checked onChange={() => true} />
        :
        <input type="checkbox" />
      }
        </div>
      ))}



    </div>
  );
}

export default App;
