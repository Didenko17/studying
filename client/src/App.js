import './App.css';
import JsonFormsReact from './JsonFormsReact';
import ExcelReact from './ExcelReact';

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
          <Link to="/">Генерация форм</Link>
          <Link to='/ExcelReact'>Работа с Excel</Link>         
        </header>
        <Switch>
          <Route exact path='/ExcelReact'>
            <ExcelReact/>
          </Route>
          <Route path="/">
            <JsonFormsReact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
