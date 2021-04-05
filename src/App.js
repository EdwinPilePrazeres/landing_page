import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch >
        <Route path="/landing_page" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
