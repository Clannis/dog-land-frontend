import './styles/app.scss';
import Login from './pages/Login';
import {Route} from 'react-router-dom'

function App() {
  return (
    <Route path="/login" component={Login}/>
  );
}

export default App;
