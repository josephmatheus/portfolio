import CardProject from "../CardProject";
import * as S from "./styled";
import projects from "../../../projects.json";

const ProjectsSection = () => {
  return (
    <S.Container id="projects">
      <h2>Projetos</h2>
      <S.ProjectsCardsListsContainer>
        {projects.map((project) => {
          return (
            <CardProject
              titulo={project.title}
              tecs={project.tecs}
              imageUrl={project.imageUrl}
              deploy={project.deploy}
              repository={project.repository}
            />
          );
        })}
      </S.ProjectsCardsListsContainer>
    </S.Container>
  );
};

export default ProjectsSection;
