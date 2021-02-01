import './styles/app.scss';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
