import { render, screen } from '@testing-library/react';
import Signup from '../pages/Signup';

test('shows sign up page', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/Getting Started/i);
  expect(linkElement).toBeInTheDocument();
});