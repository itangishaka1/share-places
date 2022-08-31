import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Users from './user/pages/Users/Users';
import NewPlace from './places/pages/NewPlace/NewPlace'
import './App.scss';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path='/' exact component={Users} />
        <Route path ='/places/new' component={NewPlace} />
        <Redirect to = '/' />
      </Switch>
    </Router>
  );
}

export default App;
