import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div>{user}</div>
      <button onClick={() => setUser('hey dude')}>Login</button>
    </div>
  );
};
