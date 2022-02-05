import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { Route, MemoryRouter } from 'react-router-dom';

test('Nav links should render', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Nav />
    </MemoryRouter>
  );

  const nav = screen.getAllByRole('link');
  expect(nav).toHaveLength(5);
});
