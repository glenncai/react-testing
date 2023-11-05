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
    const paragraphElement_substring_match = screen.getByText('ields are', { exact: false });
    const paragraphElement_regex_match = screen.getByText(/fields are mandatory/i);
    const paragraphElement_custom_function = screen.getByText(content => content.startsWith('All'));
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement_substring_match).toBeInTheDocument();
    expect(paragraphElement_regex_match).toBeInTheDocument();
    expect(paragraphElement_custom_function).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

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

    const nameElement4 = screen.getByDisplayValue('Glenn');
    expect(nameElement4).toBeInTheDocument();

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
    expect(submitElement).toBeEnabled();
  });
});
