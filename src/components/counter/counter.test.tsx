import { act, render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import Counter from './counter';

describe('Counter', () => {
  test('renders counter component correctly', () => {
    render(<Counter />);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    const user = userEvent.default;
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    await act(async () => {
      user.click(incrementButton);
    });
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking the increment button twice', async () => {
    const user = userEvent.default;
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    for (let i = 0; i < 2; i++) {
      await act(async () => {
        user.click(incrementButton);
      });
    }
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('2');
  });

  test('renders a count of 10 after clicking the set button', async () => {
    const user = userEvent.default;
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    await act(async () => {
      user.type(amountInput, '10');
    });
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    await act(async () => {
      user.click(setButton);
    });
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    const user = userEvent.default;
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    await act(async () => {
      user.tab();
    });
    expect(incrementButton).toHaveFocus();
    await act(async () => {
      user.tab();
    });
    expect(amountInput).toHaveFocus();
    await act(async () => {
      user.tab();
    });
    expect(setButton).toHaveFocus();
  });
});
