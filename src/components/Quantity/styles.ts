import styled from 'styled-components';

export const QuantitySelector = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.5rem;
    gap: 0.5rem;
    min-width: 85px;

    background-color: ${props => props.theme['base-button']};
    border-radius: ${props => props.theme.radius};
`;

export const QuantityAction = styled.span`
    color: ${props => props.theme['purple']};
    
    &:hover {
        cursor: pointer;
        color: ${props => props.theme['purple-dark']};
    }
`;