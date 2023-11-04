import React from 'react';
import './App.css';
import AppProvider from './components/providers/app-provider';
import MuiMode from './components/mui/mui-mode';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <MuiMode />
      </div>
    </AppProvider>
  );
}

export default App;
