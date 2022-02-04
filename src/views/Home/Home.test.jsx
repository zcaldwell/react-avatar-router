import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('testing how many list items render', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>
  );

  const characters = await screen.findAllByRole('link');
  expect(characters).toHaveLength(100);
});
