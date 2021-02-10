import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome';
import TrainerSignup from './pages/TrainerSignup';
import Navbar from './containers/Navbar';
import UserSignup from './pages/UserSignup';
import { Component } from 'react';
import { connect } from 'react-redux';
import UserShow from './pages/UserShow';
import TrainerShow from './pages/TrainerShow';
import autoLogin from './actions/autoLogin';
import {withRouter} from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  redirect = () => {
    console.log("redirect")
    return <Redirect to={`/${`${localStorage.type}s`}/${this.props[`${localStorage.type}`].id}`} />
  }

  redirectByType = (component = null) => {
    if (this.props.location.pathname.includes(`${localStorage.type}s`)) {
      return component
    } else {
      return this.redirect()
    }
  }

  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/">{this.props.loggedIn ? this.redirectByType() : <Welcome/>}</Route>
          <Route path="/login">{this.props.loggedIn ?  this.redirectByType() : <Login/>}</Route>
          <Route path="/register" render={() => this.props.loggedIn ? this.redirectByType() : <UserSignup registerProps={this.props.location.registerProps}/>}/>
          <Route path="/trainer_signup">{this.props.loggedIn ? this.redirectByType() : <TrainerSignup/> }</Route>
          <Route path="/users/:id">{this.props.loggedIn ?  this.redirectByType(<UserShow/>) : <Redirect to="/login" /> }</Route>
          <Route path="/trainers/:id">{this.props.loggedIn ?  this.redirectByType(<TrainerShow/>) : <Redirect to="/login" /> }</Route>
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

const mapDispatchToProps = (dispatch) => {
  return {
      autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
