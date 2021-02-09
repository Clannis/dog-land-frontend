import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome';
import TrainerSignup from './pages/TrainerSignup';
import Navbar from './containers/Navbar';
import UserSignup from './pages/UserSignup';
import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Welcome}>{this.props.loggedIn ? <Redirect to="/users/:id" /> : <Welcome/>}</Route>
          <Route path="/login" component={Login}>{this.props.loggedIn ? this.props.user.id ? <Redirect to={`/users/${this.props.user.id}`} /> : <Redirect to={`/trainers/${this.props.trainer.id}`} /> : <Login/>}</Route>
          <Route path="/register" component={UserSignup}/>
          <Route path="/trainer_signup" component={TrainerSignup}>{this.props.loggedIn ? <Redirect to="/trainers/:id" /> : <TrainerSignup/>}</Route>
        </Switch>
      </>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
      loggedIn: state.loggedIn.loggedIn,
      user: state.user.user,
      trainer: state.trainer.trainer
  }
}

export default connect(mapStateToProps)(App);
