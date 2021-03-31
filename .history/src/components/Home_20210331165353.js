import React, { useContext } from 'react';

export const Home = () => {
  const msg = useContext(UserContext);
  return <div>Home</div>;
};
