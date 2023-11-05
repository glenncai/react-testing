import { render, screen } from '../../test-utils';
import CounterTwo from './counter-two';
import * as userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';

describe('CounterTwo', () => {
  test('renders CounterTwo component correctly', () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    const user = userEvent.default;
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler} />
    );
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    act(() => {
      user.click(incrementButton);
      user.click(decrementButton);
    });
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
