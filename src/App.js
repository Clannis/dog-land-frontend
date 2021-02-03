import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import TrainerSignup from './pages/TrainerSignup';
import Navbar from './containers/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login}/>
        <Route path="/trainer_signup" component={TrainerSignup}/>
      </Switch>
    </>
  );
}

export default App;
