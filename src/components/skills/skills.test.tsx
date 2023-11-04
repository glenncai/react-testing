import { render, screen, logRoles } from '@testing-library/react';
import Skills from './skills';

describe('Skills', () => {
  const skills = ['React', 'TypeScript', 'Jest'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(skills.length);
  });

  test('renders login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('starting learning button is not rendered', () => {
    render(<Skills skills={skills} />);
    const learningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(learningButton).not.toBeInTheDocument();
  });

  test('starting learning button is eventually rendered', async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const learningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2500,
      }
    );
    expect(learningButton).toBeInTheDocument();
  });
});
