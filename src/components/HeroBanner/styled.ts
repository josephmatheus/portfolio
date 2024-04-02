import styled from "styled-components";
import "../../styles/variables.css";

export const Container = styled.section`
  max-width: 100%;
  width: 1440px;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivR = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 75%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 50%;
      width: 75%;
    }
  }

  @media screen and (max-width: 670px) {
    display: none;
  }
`;

export const DivL = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;

  h2 {
    font-size: 3.6rem;
    width: 302px;
    line-height: 48px;
  }

  p {
    font-size: 1.8rem;
    color: var(--dark-40);
    font-weight: 500;
    line-height: 24px;
    margin: 18px 0 35px;
  }

  .buttons {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  @media screen and (max-width: 670px) {
    width: 100%;
    align-items: center;
    padding: 8px;

    h2 {
      width: 100%;
      text-align: center;
    }

    .buttons {
      width: 100%;
      flex-wrap: wrap;
    }
  }
`;
