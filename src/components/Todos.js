import React from 'react';
import PropTypes from 'prop-types';

function Todos({ todo }) {
  return (
    <h1>
      User Name:{todo}
    </h1>
  );
}

export default Todos;
