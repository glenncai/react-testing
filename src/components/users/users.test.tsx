import { render, screen } from '../../test-utils';
import Users from './users';
import { rest } from 'msw';
import { server } from '../../__mocks__/server';

describe('Users', () => {
  test('renders Users component correctly', () => {
    render(<Users />);
    const textElement = screen.getByRole('heading', { name: 'Users' });
    expect(textElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3);
  });

  test('renders an error message', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<Users />);
    const errorMessage = await screen.findByText('Error fetching data');
    expect(errorMessage).toBeInTheDocument();
  });
});
