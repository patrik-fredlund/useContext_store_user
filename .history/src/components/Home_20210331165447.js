import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const Home = () => {
  const msg = useContext(UserContext);
  return;
  <div>
    <div>Home</div>;<div>{msg}</div>
  </div>;
};
