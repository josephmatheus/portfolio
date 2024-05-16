import styled from "styled-components";
import "../../styles/variables.css"

export const Li = styled.li`
    width: 350px;
    height: 240px;
    padding: 20px 25px;
    background-color: var(--dark-20);
    border: 1px solid var(--dark-30);
`

export const PhotoContainer = styled.div`
    background-color: var(--dark-10);
    width: 300px;
    height: 130px;
    border: 1px solid var(--dark-30);
    overflow: hidden;

    img {
        width: 100%;
    }
`

export const ProjectInfoContainer = styled.div`
    margin-top: 23px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    h3 {
        font-weight: 500;
        font-size: 1.8rem;
    }

    p {
        font-size: 1.4rem;
        color: var(--dark-40);
    }
`
