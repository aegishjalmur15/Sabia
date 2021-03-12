import './styles/globalStyles.css'
import Landing from './pages/landing'
import Login from './pages/login'
import Main from './pages/main'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './components/private'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/log" component={Login} />
        <PrivateRoute exact path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
