import { render, screen } from '@testing-library/react';

import Homepage from './Homepage';

test('renders learn react link', () => {
  const container = render(<Homepage />);
  expect(screen.getByText('This is homepage!!'));
});
