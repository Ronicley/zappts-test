import { render, screen } from '@testing-library/react';
import Signin from '../pages/Signin';

test('shows sign in page', () => {
  render(<Signin />);
  const linkElement = screen.getByText(/Create Account/i);
  expect(linkElement).toBeInTheDocument();
});
