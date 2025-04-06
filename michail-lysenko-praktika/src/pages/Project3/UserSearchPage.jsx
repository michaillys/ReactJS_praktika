import React, { useEffect, useState, useMemo, useCallback } from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';

const UserSearchPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const bigList = Array(10).fill(data).flat().map((u, i) => ({ ...u, id: i + 1 }));
        setUsers(bigList);
        setLoading(false);
      });
  }, []);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setSearch('');
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Naudotojų paieška</h2>
      <SearchBar value={search} onChange={handleChange} onClear={handleClear} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default UserSearchPage;
