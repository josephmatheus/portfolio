import styled from "styled-components";
import "../../styles/variables.css"

export const Li = styled.li`
    width: 350px;
    height: 296px;
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

    h3 {
        font-weight: 500;
        font-size: 1.6rem;
    }

    p {
        font-size: 1.2rem;
        color: var(--brand-color);
        margin: 18px 0;
    }

    .linksContainer {
        width: 100%;
        display: flex;
        gap: 18px;

        a {
            width: 140px;
            padding: 10px;
            font-size: 1.2rem;
            text-align: center;
            border: 2px solid var(--brand-color);
            color: var(--brand-color);
            border-radius: 4px;
            font-weight: 700;

            &:first-child {
                color: var(--dark-10);
                background-color: var(--brand-color);
                
            }
        }
    }
`
