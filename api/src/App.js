import React from 'react';
import './App.css';
import JokeList from './components/JokeList';

function App() {
  
  return (
    <div className="App">
      <h1 className="header">Welcome to my Jokes App!</h1>
      <JokeList />
    </div>
  );
}

export default App;
