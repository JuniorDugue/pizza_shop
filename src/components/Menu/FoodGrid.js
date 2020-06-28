import styled from "styled-components";
import { Title } from "../shared/Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
    position: absolute;
    background: white;
    padding: 5px;
`

export const Food = styled(Title)`
    height: 400px;
    padding: 10px;
    font-size: 5em;
    background-image: ${({ img }) => `url(${img});`}
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    border-radius: 32px;
    box-shadow: 0px 0px 8px 1px grey;
`;
