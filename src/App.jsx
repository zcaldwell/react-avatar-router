import Home from './views/Home/Home';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/character/:characterId">
            <CharacterDetail />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
