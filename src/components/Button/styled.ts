import styled from "styled-components";
import "../../styles/variables.css";

export const Button = styled.button`
  width: 143px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid var(--dark-30);
  color: var(--dark-50);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;

  &.cv {
    background-color: var(--brand-color);
    color: var(--dark-10);
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (max-width: 670px) {
    width: 150px;
  }
`;
