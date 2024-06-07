import { IconContext } from "react-icons";
import * as S from "./styled"
import * as Si from "react-icons/si";

export const SkillsSection = () => {
  return (
    <S.Container id="skills">
      <h2>Minhas Skills</h2>
      <S.Skills>
        <IconContext.Provider value={{className: "react-icons"}}>
          <li><Si.SiHtml5 /></li>
          <li><Si.SiCss3 /></li>
          <li><Si.SiJavascript /></li>
          <li><Si.SiReact /></li>
          <li><Si.SiTypescript /></li>
          <li><Si.SiStyledcomponents /></li>
        </IconContext.Provider>
      </S.Skills>
    </S.Container>
  )
}
