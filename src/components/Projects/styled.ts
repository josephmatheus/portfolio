import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h2 {
        font-size: 3.2rem;
    }
`

export const ProjectsCardsListsContainer = styled.ul`
    width: 100%;
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-columns: repeat(3, minmax(395px, 400px));
    row-gap: 32px;

    @media screen and (max-width: 1220px) {
        grid-template-columns: repeat(2, minmax(395px, 400px));
    }
    
    @media screen and (max-width: 790px) {
        grid-template-columns: repeat(1, minmax(395px, 400px));
    }
`