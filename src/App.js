import React from 'react';
import Profile from './components/profile.js';
import Contents from './components/contents.js'
import About from './components/01about.js'
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Profile />
        <Contents />
        <About />
      </div>
    </>
  );
}

export default App;
