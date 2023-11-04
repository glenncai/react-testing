import Greet from '../greet';
import { render, screen } from '@testing-library/react';

describe('Greet Group 1', () => {
  test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Greet Group 2', () => {
  test('Greet renders a name', () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText('Hello John');
    expect(textElement).toBeInTheDocument();
  });
});
