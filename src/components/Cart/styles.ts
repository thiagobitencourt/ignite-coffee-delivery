import styled from 'styled-components';

export const CartCard = styled.button`
    outline: none;
    border: none;
    border-radius: ${props => props.theme.radius};
    background-color: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['base-card']};
    width: 38px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['purple']};
    }
`;
