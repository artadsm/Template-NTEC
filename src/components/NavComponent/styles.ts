import styled from 'styled-components';

interface ContainerProps {
    selected: boolean;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
    padding-left: 18px;
    height: 56px;

    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: ${(props) => (props.selected ? '#3856DC' : '#3E4347')};
    @media only screen and (min-width: 1050px) {
        padding-left: 22px;
    }
    @media only screen and (min-width: 1150px) {
        padding-left: 26px;
    }

    @media only screen and (min-width: 1250px) {
        padding-left: 30px;
    }
    @media only screen and (min-width: 1350px) {
        padding-left: 40px;
    }
`;

export const Title = styled.span`
    font-size: 10px;
    font-weight: bold;
    color: #e1e7ff;
    font-family: 'Nunito';
    @media only screen and (min-width: 950px) {
        font-size: 12px;
    }
    @media only screen and (min-width: 1050px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1250px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 1350px) {
        font-size: 18px;
    }
`;

export const Icon = styled.img`
    width: 16px;
    height: 16px;
    @media only screen and (min-width: 950px) {
        width: 18px;
        height: 18px;
    }
    @media only screen and (min-width: 1050px) {
        width: 24px;
        height: 24px;
    }
`;
