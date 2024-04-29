import styled from "styled-components";

import { TitleL } from '../../components/Text';
import { Card } from "../../components/Card";

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
`;
