import * as S from "./styled";
import HeroImage from "../../assets/hero-image.svg";
import { Button } from "../Button";

export const HeroSection = () => {
  return (
    <S.Container>
      <S.DivL>
        <h2>Olá, eu sou o Joseph Matheus :)</h2>
        <p>Desenvolvedor Front-End</p>
        <div className="buttons">
          <Button CV />
          <Button />
        </div>
      </S.DivL>
      <S.DivR>
        <img
          src={HeroImage}
          alt="Ilustração - Pessoa do gênero masculino em frente ao computador"
        />
      </S.DivR>
    </S.Container>
  );
};
