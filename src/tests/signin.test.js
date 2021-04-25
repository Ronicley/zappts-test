import {render, screen, fireEvent, act} from '@testing-library/react';
import Signin from '../pages/Signin';

const setup = () => {
  const utils = render(<Signin/>)
  const input = utils.getByTestId('content-email-input')
  return {
    input,
    ...utils,
  }
}

test('shows sign in page', () => {
  render(<Signin/>);
  const linkElement = screen.getByText(/Create Account/i);
  expect(linkElement).toBeInTheDocument();
});

test('Ot validate signin email field test error', async () => {
  const {input} = await setup()
  await act(async () => {
    fireEvent.change(await input, {target: {value: 'email@mail.com'}})
  });
  expect(await input.value).toBe('email@mail.com')
});
