import React from 'react';
import './App.scss';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
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
      <h1>Jr's PizzaShop</h1>
    </div>
  );
}

export default App;
