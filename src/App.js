import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import TrainerLogin from './pages/TrainerLogin';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route path="/trainer_login" component={TrainerLogin}/>
    </Switch>
  );
}

export default App;
