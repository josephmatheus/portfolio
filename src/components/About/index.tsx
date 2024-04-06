import { BsTelephone } from "react-icons/bs";
import * as S from "./styled";
import { CiMail, CiFaceSmile } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

export const AboutSection = () => {
  const iconColor = "#00dfb0";
  const iconsSize = 32;

  return (
    <S.AboutContainer>
      <h2>Sobre mim</h2>
      <p>
        Um apaixonado desenvolvedor front-end atualmente trilhando novos
        caminhos em busca de oportunidades emocionantes no mercado de
        tecnologia. Anteriormente, atuei como técnico em química, onde adquiri
        habilidades analíticas e disciplina, e agora estou direcionando minha
        paixão para a programação.
      </p>
      <ul className="contacts">
        <li>
          <div className="icon-container">
            <CiFaceSmile size={iconsSize} color={iconColor}/>
          </div>
          <h3>Meu nome</h3>
          <span>Joseph Matheus</span>
        </li>
        <li>
          <div className="icon-container">
            <CiMail size={iconsSize} color={iconColor}/>
          </div>
          <h3>E-mail</h3>
          <span>josephmatheus@hotmail.com</span>
        </li>
        <li>
          <div className="icon-container">
            <FaLinkedinIn size={iconsSize} color={iconColor}/>
          </div>
          <h3>Linkedin</h3>
          <span>in/josephmatheus</span>
        </li>
        <li>
          <div className="icon-container">
            <BsTelephone size={iconsSize} color={iconColor}/>
          </div>
          <h3>Meu nome</h3>
          <span>Joseph Matheus</span>
        </li>
      </ul>
    </S.AboutContainer>
  );
};
