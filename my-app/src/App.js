import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './User/pages/Users';
import NewPlace from './Places/Pages/NewPlaces';
import MainNavigation from './Shared/Components/Navigation/MainNavigation'; 
// import MainSlide from './Shared/Components/SlideShow/MainSlide';
function App() {
  return (
    <Router>

      <MainNavigation />
      <main> 
      <Router>
        <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </main>
    </Router>
  );
}

export default App;
