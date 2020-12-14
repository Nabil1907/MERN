import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import UserPlaces from './Places/Pages/UserPlaces' ;
import Users from './User/pages/Users';
import NewPlace from './Places/Pages/NewPlaces';
import MainNavigation from './Shared/Components/Navigation/MainNavigation'; 
import UpdatePlace from './Places/Pages/UpdatePlace' ;
// import MainSlide from './Shared/Components/SlideShow/MainSlide';
function App() {
  return (
    <Router>

      <MainNavigation />
      <main> 
        <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/allUser" exact>
              <Users />
            </Route>
            <Route path="/:userId/places"exact>
              <UserPlaces/>
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Route path="/places/:placeId" exact>
            <UpdatePlace/>
            </Route>
            <Route path="/auth" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
      </main>
    </Router>
  );
}

export default App;
