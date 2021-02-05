import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome';
import TrainerSignup from './pages/TrainerSignup';
import Navbar from './containers/Navbar';
import Register from './pages/Register';

function App() {
  let loggedIn = (localStorage.token ? true : false)
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Welcome}>{loggedIn ? <Redirect to="/users/:id" /> : <Login/>}</Route>
        <Route path="/login" component={Login}>{loggedIn ? <Redirect to="/users/:id" /> : <Login/>}</Route>
        <Route path="/register" component={Register}>{loggedIn ? <Redirect to="/users/:id" /> : <Register/>}</Route>
        <Route path="/trainer_signup" component={TrainerSignup}/>
      </Switch>
    </>
  );
}

export default App;
