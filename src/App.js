import React from 'react';
import './App.css';
import Users  from './components/Users';
import todos from './api/todos';
import users from './api/users';

// const dataUsers = users.map(user => (
//
// ));
function App() {
  return (
    <div className="App">
      <Users user="Dmitry" />
    </div>
  );
}

export default App;
