import styled from 'styled-components';

const BaseTitleText = styled.span`
    font-family: "Baloo 2", sans-serif;
    color: ${props => props.theme['base-subtitle']};
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    line-height: 130%;
`;

export const TitleXl = styled(BaseTitleText)`
    font-size: 3rem;
    color: ${props => props.theme['base-title']};
`;

export const TitleL = styled(BaseTitleText)`
    font-size: 2rem;
`;

export const TitleM = styled(BaseTitleText)`
    font-size: 1.5rem;
`;

export const TitleS = styled(BaseTitleText)`
    font-size: 1.25rem;
    font-weight: 700;
`;

export const TitleXS = styled(BaseTitleText)`
    font-size: 1.1rem;
    font-weight: 700;
`;

const BaseText = styled.span`
    line-height: 130%;
    font-weight: 400;
    color: ${props => props.theme['base-text']};
`;

export const TextL = styled(BaseText)`
    font-size: 1.25rem;
`;

export const TextM = styled(BaseText)`
    font-size: 1rem;
`;

export const TextS = styled(BaseText)`
    font-size: 0.8rem;
`;

export const TextXS = styled(BaseText)`
    font-size: 0.7rem;
    font-weight: bold;
`;
