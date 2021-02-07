import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome';
import TrainerSignup from './pages/TrainerSignup';
import Navbar from './containers/Navbar';
import Register from './pages/Register';
import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Welcome}>{this.props.loggedIn ? <Redirect to="/users/:id" /> : <Welcome/>}</Route>
          <Route path="/login" component={Login}>{this.props.loggedIn ? <Redirect to="/users/:id" /> : <Login/>}</Route>
          <Route path="/register" component={Register}/>
          <Route path="/trainer_signup" component={TrainerSignup}>{this.props.loggedIn ? <Redirect to="/trainers/:id" /> : <TrainerSignup/>}</Route>
        </Switch>
      </>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(App);
