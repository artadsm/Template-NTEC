import styled from 'styled-components';

interface ContainerProps {
    selected: boolean;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    width: 264px;
    padding-left: 40px;
    height: 56px;

    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: ${(props) => (props.selected ? '#3856DC' : '#3E4347')};
`;

export const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #e1e7ff;
    font-family: 'Nunito';
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;
