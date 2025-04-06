import React from 'react';

const UserCard = React.memo(({ user }) => {
  return (
    <div className="card mb-2 p-2">
      <h5>{user.name}</h5>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
});

export default UserCard;
