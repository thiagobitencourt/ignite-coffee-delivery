import styled from "styled-components";

export const HeaderBar = styled.header`
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;

    & img {
        width: auto;
        height: 40px;
    }
`;

export const HeaderLine = styled.div`
    display: flex;
    gap: 12px;
    line-height: 38px;
`;

export const Location = styled.div`
    border-radius: ${props => props.theme.radius};
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 6px;

    & svg {
        color: ${props => props.theme['purple']};
    }

`;