import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import AppProvider from './components/providers/app-provider';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AppProvider, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
