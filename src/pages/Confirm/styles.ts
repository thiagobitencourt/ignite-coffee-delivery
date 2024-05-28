import styled from "styled-components";

import { TitleL } from '../../components/Text';
import { Card } from "../../components/Card";

export const ColoredIcon = styled.span`
    background-color: ${props => props.color};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${props => props.theme.backgroud};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageContainer = styled.div`
    padding: 5rem 0;
`;

export const ConfirmTitle = styled(TitleL)`
    color: ${props => props.theme['yellow-dark']};
`;

export const ConfirmationPanel = styled.div`
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    & img {
        margin: 0 auto;
    }
`;

export const DeliveryInfoCard = styled(Card)`
    background:
        linear-gradient(${props => props.theme.backgroud}, ${props => props.theme.backgroud}) padding-box, 
        linear-gradient(to right, ${props => props.theme.yellow}, ${props => props.theme.purple}) border-box;
    background-color: transparent;
    border: 1px solid transparent;
    align-items: start;
    justify-content: center;
    padding: 2rem 3rem;
`;

export const DeliveryInfoItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    & > div {
        text-align: left;
        line-height: 1.5rem;
    }
`;
