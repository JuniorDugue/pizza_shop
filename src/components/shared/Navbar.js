import React from "react";
import styled from "styled-components";
import {pizzaRed} from "./Styles/colors";
import {Title} from "./Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`

const Logo = styled(Title)`
  font-size: 2em;
  color: #fff;
  text-shadow: 5px 5px 5px #822424;
`

export function Navbar(){
  return <NavbarStyled>
    <Logo>
      Jr's PizzaShop <span role="img" aria-label="slice of pizza">🍕</span>
    </Logo>
    NavBar
  </NavbarStyled>
}