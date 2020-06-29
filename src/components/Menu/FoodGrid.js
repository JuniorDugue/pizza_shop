import styled from "styled-components";
import { Title } from "../shared/Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.52);
  padding: 5px;
`;

export const Food = styled(Title)`
    height: 400px;
    padding: 10px;
    font-size: 5em;
    background-image: ${({ img }) => `url(${img});`}
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    border-radius: 32px;
    box-shadow: 0px 0px 2px 0px grey;
    margin-top: 5px;
    transition-property: box-shadow margin-top filter;
    transition-duration: .1s;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 8px 1px grey;
        filter: contrast(100%);
        margin-top: 0;
        margin-bottom: 5px;
    }
`;
