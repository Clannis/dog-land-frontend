import './styles/app.scss';
import Login from './pages/Login';
import {Route} from 'react-router-dom'
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
    </>
  );
}

export default App;
