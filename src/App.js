import React from 'react';
import './style/App.css';
import Header from './components/header';
import NavRouter from './components/NavRouter';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavRouter/>
    </div>
  );
}

export default App;
