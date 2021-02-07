import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome';
import TrainerSignup from './pages/TrainerSignup';
import Navbar from './containers/Navbar';
import Register from './pages/Register';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Welcome}>{localStorage.token ? <Redirect to="/users/:id" /> : <Welcome/>}</Route>
          <Route path="/login" component={Login}>{localStorage.token ? <Redirect to="/users/:id" /> : <Login/>}</Route>
          <Route path="/register" component={Register}/>
          <Route path="/trainer_signup" component={TrainerSignup}>{localStorage.token ? <Redirect to="/trainers/:id" /> : <TrainerSignup/>}</Route>
        </Switch>
      </>
    );
  }  
}

export default App;
