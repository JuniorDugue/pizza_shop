import React, { useState } from "react";
import "../App.scss";
import { GlobalStyle } from "./shared/Styles/GlobalStyle";
import { Navbar } from "./shared/Navbar.js";
import { Banner } from "./shared/Banner.js";
import { Menu } from "./Menu/Menu.js";
import FoodDialog from "./FoodDialog/FoodDialog";

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <div className="App">
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </div>
  );
}

export default App;
