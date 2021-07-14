import logo from './logo.svg';
import './App.css';
import JsonFormsReact from './JsonFormsReact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Главная</Link>         
        </header>
        <Switch>
          <Route path="/">
            <JsonFormsReact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
