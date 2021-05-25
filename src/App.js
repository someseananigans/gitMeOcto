import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom'
import { Home, Page404 } from './pages'


const App = () => {

  return (
    <div id="main">
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Page404 />
      </Switch>
    </div>
  )
}

export default App;
