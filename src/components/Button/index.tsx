import * as S from "./styled";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  CV?: boolean;
}

export const Button = (props: IProps) => {
  const { CV } = props;
  return (
    <S.Button className={CV ? "cv" : ""}>
      <a
        href={
          CV
            ? "https://drive.google.com/file/d/1E7P3fug6Z41dkHbICQ0dgsOB1MYsn9nc/view?usp=sharing"
            : "mailto:josephmatheus@hotmail.com"
        }
        target={CV ? "_blank" : ""}
      >
        {CV ? "Download CV" : "Entrar em contato"}
      </a>
    </S.Button>
  );
};
