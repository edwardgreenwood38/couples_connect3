import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Login from './pages/login';
import Register from './pages/register';
import Events from './pages/events';


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/events" component={Events} />
        <Route path="/" component={() => <h2>Home Page</h2>} />
      </Switch>
    </Router>
  );
};

export default App;
