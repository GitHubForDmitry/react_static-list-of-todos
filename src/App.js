import React, {useEffect} from 'react';
import './App.css';
// or less ideally
import { Button } from 'react-bootstrap'
import todos from './api/todos';
import users from './api/users';

function App(props) {


  const [filterUser, setFilterUser] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [userId, setUserId] = React.useState(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setItems(json))
  }, [])


  const reverse = (arr) => {
    const res = arr.reverse();
    setItems([...res]);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleChangeUserId = (e) => {
    setUserId(e.target.value);
    !!userId ? setFilterUser(true) : setFilterUser(false)
  }
  return (
    <div>
      <button onClick={() => reverse(items)}>rev</button>
      <input type="search" onChange={(e) => handleSearch(e)} />
      <select onChange={event => handleChangeUserId(event)}>
          <option value='1'>1</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
      </select>
      {items.filter(item => item.title.includes(search)).filter(user => filterUser ? user.userId === +userId : true).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <div>
            {item.title}
          </div>
        </li>
      ))}
    </div>
  );
}

export default App;
