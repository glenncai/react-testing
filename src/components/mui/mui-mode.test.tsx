import { render, screen } from '@testing-library/react';
import MuiMode from './mui-mode';
import AppProvider from '../providers/app-provider';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />, {
      wrapper: AppProvider,
    });
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
