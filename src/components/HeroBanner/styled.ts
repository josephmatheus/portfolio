import styled from "styled-components";
import "../../styles/variables.css";

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  margin: 100px auto 127px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 670px) {
    margin: 50px auto 0;
  }
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
      height: 65%;
      width: 90%;
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
  align-items: center;
  padding-left: 50px;

  h2 {
    font-size: 3.6rem;
    width: 302px;
    line-height: 46px;
  }

  p {
    width: 302px;
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

    h2, p {
      width: 100%;
      text-align: center;
    }

    h2 {
      font-size: 2.4rem;
      line-height: 30px;
    }

    p {
      font-size: 1.6rem;
      margin: 8px 0 32px;
      line-height: 20px;
    }

    .buttons {
      width: 100%;
      flex-wrap: wrap;
    }
  }
`;
