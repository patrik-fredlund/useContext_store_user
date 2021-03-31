import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setUser('hey dude')}>Login</button>
    </div>
  );
};
