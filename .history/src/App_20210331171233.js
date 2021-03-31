import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { UserContext } from './components/UserContext';

function App() {
  const [value, setValue] = useState('Hello from context');

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={{ value, setValue }}>
        <Route path='/' exact component={Home} />
        <Route path='/about/' component={About} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
