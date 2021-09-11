import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Home from './components/home/Home.js';
import Temperature from './components/temperature/Temperature.js';
import CustomizeImage from './components/customizeImage/CustomizeImage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/temperature'>Temperature</Link>
          <Link to='/customize-image'>Customize Image</Link>
        </nav>
      </header>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/temperature'>
          <Temperature />
        </Route>

        <Route path='/customize-image'>
          <CustomizeImage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
