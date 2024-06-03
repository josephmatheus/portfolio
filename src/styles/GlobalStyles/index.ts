import { createGlobalStyle } from "styled-components";
import "../../styles/variables.css"


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    width: 100%;
    background-color: var(--dark-10);
    color: var(--dark-40);
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  .react-icons {
    color: var(--brand-color);
    font-size: 68px;
  }
`;
