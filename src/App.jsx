import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import HolePoints from './components/HolePoints.jsx';

function App() {
  return (
    <>
      <div className="App">
        <Header hcp={11.4} />
        <HolePoints />
      </div>
    </>
  );
}

export default App;
