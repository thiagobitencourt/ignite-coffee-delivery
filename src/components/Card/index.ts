import styled from "styled-components";

export const Card = styled.div`
    background-color:${p => p.theme['base-card']};
    border-radius: ${props => props.theme.radius};
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    min-height: 7rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
`;
