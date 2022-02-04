import Home from './views/Home/Home';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
          <Route path="character/:nation">
            <Nation />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}
