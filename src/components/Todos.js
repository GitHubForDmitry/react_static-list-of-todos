import React from 'react';
import PropTypes from 'prop-types';

function Todos({ todo }) {
  return (
    <h1>
      Title{todo.title}
    </h1>
  );
}

export default Todos;
