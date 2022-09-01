import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Users from './user/pages/Users/Users';
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import './App.scss';

function App() {
  return (
    <Router className="App">
      <MainNavigation />
      <main>  
      <Switch>
        <Route path='/' exact component={Users} />
        <Route path='/:userId/places'  component={UserPlaces} exact />
        <Route path ='/places/new' component={NewPlace} exact />
        <Redirect to = '/' />
       </Switch>
      </main>
    </Router>
  );
}

export default App;
