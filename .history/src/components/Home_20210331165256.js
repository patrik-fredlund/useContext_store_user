import React from 'react';
import { UserContext } from './UserContext';

export const Home = () => {
  const msg = useContext(UserContext);
  return <div>Home</div>;
};
