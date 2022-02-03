import { render } from '@testing-library/react';
import CharacterList from './CharacterList';

test('testing how many list items render', async () => {
  render(<CharacterList />);

  const characters = await screen.findAllByRole('listitem');
  expect(characters).toHaveLength(100);
});
