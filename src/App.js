import './styles/app.scss';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Switch, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </Switch>
  );
}

export default App;
