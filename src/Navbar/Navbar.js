import React from "react";
import styled from "styled-components";
import {pizzaRed} from "../Styles/colors";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed}
  padding: 10px;
`

export function Navbar(){
  return <NavbarStyled>
    NavBar
  </NavbarStyled>
}