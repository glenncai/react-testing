import React from 'react';
import './App.css';
import AppProvider from './components/providers/app-provider';
import Users from './components/users/users';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Users />
      </div>
    </AppProvider>
  );
}

export default App;
