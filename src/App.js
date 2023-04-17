import React from 'react';
import Profile from './components/profile.js';
import Contents from './components/contents.js'
import About from './components/01about.js'
import Skill from './components/02skill.js'
import Work from './components/03work.js'
import Contact from './components/04contact.js'
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Profile />
        <Contents />

        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
