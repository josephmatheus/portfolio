import * as S from "./styled"

interface IProps {
  imageUrl?: string,
  titulo: string,
  tecs: string
}

const CardProject = ({imageUrl, titulo, tecs}: IProps) => {
  return (
    <S.Li>
        <S.PhotoContainer>
            <img src={imageUrl ? imageUrl : "https://picsum.photos/1500"} alt="" />
        </S.PhotoContainer>
        <S.ProjectInfoContainer>
            <h3>{titulo}</h3>
            <p>Tecs: {tecs}</p>
        </S.ProjectInfoContainer>
    </S.Li>
  )
}

export default CardProject