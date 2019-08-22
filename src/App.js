import React from 'react';
import './App.scss';
import { createGlobalStyle } from 'styled-components'
import {Navbar} from './Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    color: white;
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
    </div>
  );
}

export default App;
