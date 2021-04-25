import {render, screen, fireEvent, act} from '@testing-library/react';
import Signup from '../pages/Signup';

const setup = (inputNameId) => {
  const utils = render(<Signup/>)
  const input = utils.getByTestId(inputNameId)
  return {
    input,
    ...utils,
  }
}

test('shows sign up page', () => {
  render(<Signup/>);
  const linkElement = screen.getByText(/Getting Started/i);
  expect(linkElement).toBeInTheDocument();
});

test('It validates filling in the email field', async () => {
  const {input} = await setup("content-email-input")
  await act(async () => {
    fireEvent.change(await input, {target: {value: 'email@mail.com'}})
  });
  expect(await input.value).toBe('email@mail.com')
});

test('It validates error filling the email field', async () => {
  const {container, input} = await setup("content-email-input")
  await act(async () => {
    fireEvent.change(await input, {target: {value: 'email'}})
  });
  expect(container.getElementsByClassName("Mui-error").length).toBe(2);
});

test('It validates filling in the fullname field', async () => {
  const {input} = await setup("content-full-input")
  await act(async () => {
    fireEvent.change(await input, {target: {value: 'nome sobrenome'}})
  });
  expect(await input.value).toBe('nome sobrenome')
});
