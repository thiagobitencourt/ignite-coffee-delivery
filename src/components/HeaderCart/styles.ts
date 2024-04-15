import styled from "styled-components";

export const HeaderCartCard = styled.button`
    position: relative;
    outline: none;
    border: none;
    border-radius: ${props => props.theme.radius};
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }

    &::after {
        content: '23';
        background-color: ${props => props.theme['yellow-dark']};
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 0.7rem;
        color: ${props => props.theme.white};
        position: absolute;
        top: -10px;
        right: -10px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;