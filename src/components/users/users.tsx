import { FC, useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Users: FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError('Error fetching data'));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <List>
        {users.map(user => (
          <ListItem key={user} disablePadding>
            <ListItemButton>
              <ListItemText primary={user} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Users;
