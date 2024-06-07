import * as S from "./styled"

interface IProps {
  imageUrl?: string,
  titulo: string,
  tecs: string,
  deploy: string,
  repository: string
}

const CardProject = ({imageUrl, titulo, tecs, deploy, repository}: IProps) => {

  return (
    <S.Li>
        <S.PhotoContainer>
            <img src={imageUrl ? imageUrl : "https://picsum.photos/1500"} alt="Imagem do projeto" />
        </S.PhotoContainer>
        <S.ProjectInfoContainer>
            <h3>{titulo}</h3>
            <p>{tecs}</p>
            <div className="linksContainer">
              <a href={deploy} target="_blank" rel="noopener noreferrer">Acessar o projeto</a>
              <a href={repository} target="_blank" rel="noopener noreferrer">Acessar repositório</a>
            </div>
        </S.ProjectInfoContainer>
    </S.Li>
  )
}

export default CardProject