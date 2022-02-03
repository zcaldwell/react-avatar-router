import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

test('should render a character detail', async () => {
  render(
    <MemoryRouter initialEntries={['/character/5cf5679a915ecad153ab68c9']}>
      <Route path="/character/:characterId">
        <CharacterDetail />
      </Route>
    </MemoryRouter>
  );
  const character = await screen.findByText(/Aang/i);
  expect(character).toBeInTheDocument();
});
