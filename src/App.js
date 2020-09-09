import React from 'react';
import './App.css';
// or less ideally
import { Button } from 'react-bootstrap'
import todos from './api/todos';
import users from './api/users';

function App() {
  // userId: 1,
  //   id: 1,
  //   title: 'delectus aut autem',
  //   completed: false,
  const allUsers = todos.map(item => {return (
    {
      userId: item.userId,
      id: item.id,
      title: item.title,
      completed: item.completed,
      users: users.find(user => user.id === item.userId)

    }
  )

  })

  const onchange = (e) => console.log(e)
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
      <div className="container">
        {allUsers.map(item => { return (
          <div className='container__block' key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.users.name}</div>

            {item.completed ?
            <input type="checkbox" checked onChange={event => onchange(event.target.value)}/>
              :
              <input type="checkbox" onChange={event => onchange(event.target.value)}/>
            }

          </div>
          )})}

      </div>

    </div>
  );
}

export default App;
