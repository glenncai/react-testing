import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    const data = [
      {
        name: 'Bruce Lee',
      },
      {
        name: 'Jackie Chan',
      },
      {
        name: 'Jet Li',
      },
    ];

    return res(ctx.status(200), ctx.json(data));
  }),
];
