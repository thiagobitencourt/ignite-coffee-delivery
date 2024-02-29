import styled from 'styled-components';

export const TagLabel = styled.span`
    color: ${props => props.theme['yellow-dark']};
    background-color: ${props => props.theme['yellow-light']};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.7rem;
    line-height: 130%;
    padding: 4px 8px;
    border-radius: 15px;
`;