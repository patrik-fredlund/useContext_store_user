import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {
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
      <Route path='/' exact component={Home} />
      <Route path='/about/' component={About} />
    </Router>
  );
}

export default App;
