import styled from "styled-components";
import "../../styles/variables.css"

export const HeaderContainer = styled.header`
  max-width: 100%;
  width: 1440px;
  margin: 0 auto;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.6rem;
    color: var(--brand-color);
  }
`;

/* 

Aqui estão alguns exemplos de frameworks populares com seus breakpoints:

? Bootstrap – 576px, 768px, 992px, 1200px e 1400px.
* Foundation – 640px, 1024px e qualquer tamanho para dispositivos menores.
! Bulma – 768px, 769px, 1024px, 1216px e 1408px.

*/
