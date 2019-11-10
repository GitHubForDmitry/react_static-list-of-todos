import React from 'react';
import PropTypes from 'prop-types';

function Users({ user }) {
  return (
    <h1>
      User Name:{user.name}
    </h1>
  );
}

export default Users;
