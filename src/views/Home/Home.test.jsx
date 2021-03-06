import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Home from './Home';

test('testing how many list items render', async () => {
  render(
    <MemoryRouter initialEntries={['/all']}>
      <Route path={['/:nation']}>
        <Home />
      </Route>
    </MemoryRouter>
  );
  screen.debug();
  const characters = await screen.findAllByRole('link');
  expect(characters).toHaveLength(100);
});
