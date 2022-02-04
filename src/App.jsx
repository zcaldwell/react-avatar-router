import Home from './views/Home/Home';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';

export default function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/character/:characterId">
            <CharacterDetail />
          </Route>
          <Route path="/:nation">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/all" />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}
