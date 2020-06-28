import React from "react";
import styled from "styled-components";
import {foods} from "./FoodData";

const MenuStyled = styled.div`
    border: 2px solid black;
    margin: 0px 400px 50px 20px;
    height: 1000px;
`

export function Menu(){
    return(
        <MenuStyled>
        {foods.map(food => (
            <div>{food.name}</div>
        ))}
        </MenuStyled>
    )
}