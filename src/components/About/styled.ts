import styled from "styled-components";
import "../../styles/variables.css";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 50px;

  h2 {
    font-size: 3.2rem;
  }

  p {
    color: var(--dark-40);
    font-size: 1.8rem;
    text-align: center;
    width: 745px;
    max-width: 100%;
    line-height: 32px;
  }

  .contacts {
    margin: 32px 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    place-content: center;
    place-items: center;
    max-width: 100%;
    width: 1440px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      .icon-container {
        width: 62px;
        height: 62px;
        background-color: var(--dark-20);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      h3 {
        font-size: 1.8rem;
        color: var(--dark-50);
        margin: 10px 0 2px;
      }

      span {
        font-size: 1.6rem;
        color: var(--dark-40);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contacts {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
      row-gap: 32px;

      li {
        h3 {
          font-size: 1.4rem;
        }

        span {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    margin: 18px auto;

    h2 {
      text-align: center;
      width: 100%;
      font-size: 2.4rem;
    }

    p {
      max-width: 300px;
      font-size: 1.4rem;
      line-height: 20px;
    }

    .contacts {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
      row-gap: 32px;
    }
  }
`;
