import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p>Nerasta jokių naudotojų.</p>;
  }

  return (
    <>
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </>
  );
};

export default UserList;
