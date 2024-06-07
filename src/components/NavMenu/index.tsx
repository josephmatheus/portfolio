import { useState } from "react";
import { Nav } from "./styled";
import { IoMenu, IoClose } from "react-icons/io5";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav $showMenu={isOpen}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={34} /> : <IoMenu size={34} />}
        </button>
        <menu>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#skills">Minhas Skills</a>
          </li>
        </menu>
      </Nav>
    </>
  );
};

export default NavMenu;
