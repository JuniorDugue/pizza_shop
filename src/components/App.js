import React from "react";
import "../App.scss";
import { GlobalStyle } from "./shared/Styles/GlobalStyle";
import { Navbar } from "./shared/Navbar.js";
import { Banner } from "./shared/Banner.js";
import { Menu } from "./Menu/Menu.js";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </div>
  );
}

export default App;
