import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const Home = () => {
  const msg = useContext(UserContext);
  return;
  <div>
    <h2>Home</h2>
    <div>{msg}</div>
  </div>;
};
