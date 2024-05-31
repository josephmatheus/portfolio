import styled from "styled-components";
import "../../styles/variables.css";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 185px;

  h2 {
    font-size: 3.2rem;
    margin-bottom: 30px;
  }
`;

export const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(150px, 200px));
  place-content: center;
  place-items: center;

  li {
    width: 150px;
    height: 150px;
    background-color: var(--dark-20);
    border: 1px solid var(--dark-30);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(150px, 250px));
    row-gap: 25px;
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(150px, 200px));
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(1, minmax(150px, 200px));
  }
`;
