import styled, { keyframes } from "styled-components";
import "../../styles/variables.css";

const openMenu = keyframes`
    0% {
        transform: translateX(15rem);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;
const closeMenu = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
        display: block;
    }
    100% {
        transform: translateX(15rem);
        opacity: 0;
        display: none;
    }
`;

interface IProps extends React.HTMLAttributes<HTMLElement> {
  $showMenu: boolean;
}

export const Nav = styled.nav<IProps>`
  button {
    display: none;
    cursor: pointer;
    background: none;
    border: none;
    color: #fff;
  }

  menu {
    display: flex;
    gap: 45px;
    li {
      a {
        position: relative;
        font-size: 1.8rem;
        color: var(--dark-40);
        &:hover {
          color: var(--dark-50);
        }
        &::after{
          content: "";
          position: absolute;
          background-color: var(--brand-color);
          height: 2px;
          width: 0;
          left: 0;
          bottom: -5px;
          transition: 0.3s;
        }
        &:hover::after{
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    button {
      display: flex;
      position: absolute;
      top: 20px;
      right: 36px;
      z-index: 999;
    }

    menu {
      background-color: var(--dark-20);
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 0;
      width: 250px;
      height: 100vh;
      padding: 90px 0 0 28px;
      display: ${(props) => (props.$showMenu ? "block" : "none")};
      animation: ${(props) => (props.$showMenu ? openMenu : closeMenu)} 0.6s
        ease-in-out;

      li:nth-child(2) {
        margin: 32px 0;
      }
    }
  }
`;
