import Application from './application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      level: 1, // h1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      level: 2, // h2
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name', // label text
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input', // input element
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Your fullname...');
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio', // label text
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText('I accept the terms and conditions');
    expect(termsElement2).toBeInTheDocument();

    const submitElement = screen.getByRole('button');
    expect(submitElement).toBeInTheDocument();
  });
});
